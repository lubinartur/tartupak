#!/usr/bin/env python3
"""Render each page of the Tartupak FEFCO PDF as PNG (150 DPI)."""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Install PyMuPDF: pip install pymupdf", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
PDF_URL = "https://tartupak.ee/wp-content/uploads/2017/07/FEFCO_incl_pictures-1.pdf"
PDF_PATH = ROOT / "scripts" / "FEFCO_incl_pictures-1.pdf"
OUT_DIR = ROOT / "public" / "images" / "fefco"
DPI = 150


def download_pdf() -> None:
    if PDF_PATH.exists() and PDF_PATH.stat().st_size > 0:
        print(f"Using existing PDF: {PDF_PATH}")
        return

    import urllib.request

    print(f"Downloading {PDF_URL} ...")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    urllib.request.urlretrieve(PDF_URL, PDF_PATH)
    print(f"Saved {PDF_PATH.stat().st_size:,} bytes")


def extract_pages() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(PDF_PATH)
    zoom = DPI / 72.0
    matrix = fitz.Matrix(zoom, zoom)

    print(f"Pages: {doc.page_count} @ {DPI} DPI -> {OUT_DIR}")

    page_count = doc.page_count
    for i in range(page_count):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        out_path = OUT_DIR / f"page-{i + 1:02d}.png"
        pix.save(str(out_path))
        print(f"  {out_path.name} ({pix.width}x{pix.height})")

    doc.close()
    return page_count


def main() -> None:
    download_pdf()
    count = extract_pages()
    print(f"Done. {count} images in {OUT_DIR}")


if __name__ == "__main__":
    main()
