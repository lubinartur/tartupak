import { chromium } from "playwright";

const TAG = "d" + "iv";
const url = "http://localhost:3000/et/fefco/0200";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
console.log("Loaded:", response?.status(), url);

const report = await page.evaluate((tag) => {
  const panel = [...document.querySelectorAll(tag)].find(
    (n) =>
      String(n.className).includes("min-h-[400px]") &&
      String(n.className).includes("border-brand-border"),
  );

  if (!panel) {
    return {
      error: "Illustration panel not found",
      candidates: [...document.querySelectorAll(tag)]
        .filter((n) => String(n.className).includes("min-h"))
        .map((n) => n.className),
    };
  }

  function snapshot(el) {
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      tag: el.tagName,
      className: el.className,
      id: el.id || null,
      computed: {
        position: cs.position,
        top: cs.top,
        right: cs.right,
        bottom: cs.bottom,
        left: cs.left,
        inset: cs.inset,
        transform: cs.transform,
        translate: cs.translate,
        zIndex: cs.zIndex,
        alignSelf: cs.alignSelf,
        justifySelf: cs.justifySelf,
        height: cs.height,
        minHeight: cs.minHeight,
        maxHeight: cs.maxHeight,
        width: cs.width,
        overflow: cs.overflow,
        overflowY: cs.overflowY,
        display: cs.display,
        contain: cs.contain,
        willChange: cs.willChange,
      },
      boundingClientRect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
      isSticky: cs.position === "sticky",
      isFixed: cs.position === "fixed",
    };
  }

  const ancestors = [];
  let el = panel;
  let depth = 0;
  while (el && depth < 20) {
    ancestors.push({ depth, ...snapshot(el) });
    el = el.parentElement;
    depth++;
  }

  const topBefore = panel.getBoundingClientRect().top;
  window.scrollTo(0, 900);
  const topAfter = panel.getBoundingClientRect().top;
  const scrollY = window.scrollY;

  return {
    panelSelector: `motionlessTexture.min-h-[400px].border-brand-border`,
    ancestors,
    scrollBehaviorTest: {
      scrollY,
      panelTopBeforeScroll: topBefore,
      panelTopAfterScroll900: topAfter,
      expectedDeltaIfScrolling: -900,
      actualDelta: topAfter - topBefore,
      visuallyStuckInViewport:
        topBefore > 0 && topAfter > 0 && Math.abs(topAfter - topBefore) < 20,
    },
    stickyOrFixedAncestors: ancestors.filter(
      (a) => a.isSticky || a.isFixed || a.computed.position === "sticky" || a.computed.position === "fixed",
    ),
  };
}, TAG);

console.log(JSON.stringify(report, null, 2));
await browser.close();
