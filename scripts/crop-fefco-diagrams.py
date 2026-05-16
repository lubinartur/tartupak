#!/usr/bin/env python3
"""
Crop individual FEFCO diagrams from page PNGs using scripts/fefco-page-index.json.
Writes public/images/fefco/fefco-{code}.png and updates FEFCO_IMAGES in src/data/fefco.ts.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install Pillow", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "scripts" / "fefco-page-index.json"
PAGES_DIR = ROOT / "public" / "images" / "fefco"
OUT_DIR = PAGES_DIR
FEFCO_TS = ROOT / "src" / "data" / "fefco.ts"

PAGE_WIDTH = 1242
PAGE_HEIGHT = 1755
HEADER_PX = 200
FOOTER_PX = 100


def load_catalog_codes() -> set[str]:
    text = (ROOT / "src" / "data" / "fefco-catalog.ts").read_text(encoding="utf-8")
    return set(re.findall(r'"code": "(\d{4})"', text))


def content_bounds(width: int, height: int) -> tuple[int, int, int, int]:
    """Content area after skipping header and footer."""
    top = HEADER_PX
    bottom = height - FOOTER_PX
    return 0, top, width, bottom


def boxes_for_code_count(
    width: int,
    height: int,
    count: int,
) -> list[tuple[int, int, int, int]]:
    """
    Return crop boxes (left, upper, right, lower) for each diagram on a page.
    """
    left, top, right, bottom = content_bounds(width, height)
    content_w = right - left
    content_h = bottom - top

    if count <= 0:
        return []

    if count == 1:
        return [(left, top, right, bottom)]

    if count == 2:
        half = content_w // 2
        return [
            (left, top, left + half, bottom),
            (left + half, top, right, bottom),
        ]

    if count == 3:
        third = content_w // 3
        return [
            (left, top, left + third, bottom),
            (left + third, top, left + 2 * third, bottom),
            (left + 2 * third, top, right, bottom),
        ]

    if count == 4:
        half_w = content_w // 2
        half_h = content_h // 2
        return [
            (left, top, left + half_w, top + half_h),
            (left + half_w, top, right, top + half_h),
            (left, top + half_h, left + half_w, bottom),
            (left + half_w, top + half_h, right, bottom),
        ]

    if count == 5:
        half_h = content_h // 2
        third = content_w // 3
        row1_bottom = top + half_h
        row2_top = row1_bottom
        # Top row: 3 columns
        boxes = [
            (left, top, left + third, row1_bottom),
            (left + third, top, left + 2 * third, row1_bottom),
            (left + 2 * third, top, right, row1_bottom),
        ]
        # Bottom row: 2 columns centered
        half_w = content_w // 2
        inset = content_w // 6
        boxes.append((left + inset, row2_top, left + inset + half_w, bottom))
        boxes.append((left + inset + half_w, row2_top, right - inset, bottom))
        return boxes

    if count == 6:
        half_h = content_h // 2
        third = content_w // 3
        row1_bottom = top + half_h
        row2_top = row1_bottom
        boxes = []
        for row_top, row_bottom in ((top, row1_bottom), (row2_top, bottom)):
            boxes.extend(
                [
                    (left, row_top, left + third, row_bottom),
                    (left + third, row_top, left + 2 * third, row_bottom),
                    (left + 2 * third, row_top, right, row_bottom),
                ]
            )
        return boxes

    raise ValueError(f"Unsupported code count on page: {count} (max 6)")


def crop_page(
    page_path: Path,
    codes: list[str],
) -> dict[str, Path]:
    """Crop diagrams from one page; returns code -> output path for successes."""
    if not codes:
        return {}

    img = Image.open(page_path)
    width, height = img.size

    if width != PAGE_WIDTH or height != PAGE_HEIGHT:
        print(f"  warn: {page_path.name} is {width}x{height}, expected {PAGE_WIDTH}x{PAGE_HEIGHT}")

    try:
        boxes = boxes_for_code_count(width, height, len(codes))
    except ValueError as exc:
        print(f"  skip {page_path.name}: {exc}")
        return {}

    if len(boxes) != len(codes):
        print(f"  skip {page_path.name}: {len(codes)} codes but {len(boxes)} boxes")
        return {}

    saved: dict[str, Path] = {}
    for code, box in zip(codes, boxes, strict=True):
        crop = img.crop(box)
        out_path = OUT_DIR / f"fefco-{code}.png"
        crop.save(out_path, "PNG", optimize=True)
        saved[code] = out_path

    return saved


def page_number(page_filename: str) -> int:
    match = re.search(r"page-(\d+)", page_filename)
    return int(match.group(1)) if match else 0


def update_fefco_ts(images: dict[str, str], catalog_codes: set[str]) -> None:
    """Write FEFCO_IMAGES in src/data/fefco.ts (catalog codes only)."""
    catalog_images = {k: v for k, v in sorted(images.items()) if k in catalog_codes}

    lines = [
        "export const FEFCO_IMAGES: Partial<Record<FefcoCode, FefcoImagePath>> = {",
    ]
    for code, path in catalog_images.items():
        lines.append(f'  "{code}": "{path}",')
    lines.append("};")
    new_block = "\n".join(lines)

    content = FEFCO_TS.read_text(encoding="utf-8")
    pattern = (
        r"export const FEFCO_IMAGES: Partial<Record<FefcoCode, FefcoImagePath>> = \{.*?\};"
    )
    if not re.search(pattern, content, flags=re.DOTALL):
        print("Could not find FEFCO_IMAGES block in fefco.ts", file=sys.stderr)
        sys.exit(1)

    content = re.sub(pattern, new_block, content, count=1, flags=re.DOTALL)
    FEFCO_TS.write_text(content, encoding="utf-8")
    print(f"Updated {FEFCO_TS.relative_to(ROOT)} ({len(catalog_images)} entries)")


def main() -> None:
    if not INDEX_PATH.exists():
        print(f"Missing {INDEX_PATH}", file=sys.stderr)
        sys.exit(1)

    index = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    catalog_codes = load_catalog_codes()
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # code -> (page_num, public path) — later pages win on duplicates
    all_images: dict[str, str] = {}
    page_wins: dict[str, int] = {}

    for entry in index:
        page_name = entry["page"]
        codes: list[str] = entry.get("codes_detected") or []
        page_path = PAGES_DIR / page_name

        if not codes:
            continue
        if not page_path.exists():
            print(f"skip {page_name}: file not found")
            continue

        pnum = page_number(page_name)
        print(f"{page_name}: {len(codes)} codes -> {', '.join(codes)}")

        saved = crop_page(page_path, codes)
        for code, out_path in saved.items():
            prev = page_wins.get(code)
            if prev is not None and prev != pnum:
                print(f"  overwrite {code} (was page-{prev:02d}, now page-{pnum:02d})")
            page_wins[code] = pnum
            all_images[code] = f"/images/fefco/{out_path.name}"

    print(f"\nCropped {len(all_images)} diagrams -> {OUT_DIR.relative_to(ROOT)}/")
    update_fefco_ts(all_images, catalog_codes)

    in_catalog = sum(1 for c in all_images if c in catalog_codes)
    not_in_catalog = sorted(set(all_images) - catalog_codes)
    print(f"Catalog matches: {in_catalog}/{len(catalog_codes)} codes have images")
    if not_in_catalog:
        print(f"Cropped but not in catalog: {', '.join(not_in_catalog)}")


if __name__ == "__main__":
    main()
