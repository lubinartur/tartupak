#!/usr/bin/env node
/** Lightweight audit via HTTP fetch — no Playwright required */

const BASE = process.env.BASE_URL || "http://localhost:3000";
const LOCALES = ["et", "en", "ru"];
const PAGES = [
  "",
  "/products",
  "/products/lainepapp",
  "/products/transpordipakend",
  "/products/pizzakarbid",
  "/fefco",
  "/fefco/0201",
  "/fefco/0427",
  "/about",
  "/contact",
];

const EN_SNIPPETS = [
  "Request a Quote",
  "Browse Catalog",
  "View Details",
  "Back to catalog",
  "Send Quote Request",
  "Packaging Categories",
  "Get in Touch",
  "Toggle menu",
  "Scroll categories",
  "Premium Industrial",
  "Construction Code",
];

const issues = [];
const add = (category, page, detail) => issues.push({ category, page, detail });

async function fetchPage(url) {
  const res = await fetch(url, { redirect: "follow" });
  const html = await res.text();
  return { status: res.status, html, url: res.url };
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  for (const locale of LOCALES) {
    for (const path of PAGES) {
      const url = `${BASE}/${locale}${path}`;
      try {
        const { status, html } = await fetchPage(url);
        if (status >= 400) add("broken_route", url, `HTTP ${status}`);

        const text = stripTags(html);
        if (locale !== "en") {
          for (const s of EN_SNIPPETS) {
            if (text.includes(s)) add("untranslated", url, `EN visible: "${s}"`);
          }
        }

        // Hardcoded brand in footer is OK; check for MISSING_MESSAGE in HTML
        if (html.includes("MISSING_MESSAGE")) add("i18n_error", url, "MISSING_MESSAGE in output");

        // Extract hrefs
        const hrefs = [...html.matchAll(/href="(\/[^"]+)"/g)].map((m) => m[1]);
        const unique = [...new Set(hrefs)].slice(0, 15);
        for (const href of unique) {
          if (href.startsWith("/api")) continue;
          const testUrl = href.match(/^\/(et|en|ru)\//) ? `${BASE}${href}` : `${BASE}/${locale}${href}`;
          try {
            const r = await fetch(testUrl, { method: "HEAD", redirect: "follow" });
            if (r.status >= 400) add("broken_link", url, `${href} → ${r.status}`);
          } catch (e) {
            add("broken_link", url, `${href} — ${e.message}`);
          }
        }
      } catch (e) {
        add("page_error", url, e.message);
      }
    }
  }

  const grouped = {};
  for (const i of issues) {
    (grouped[i.category] ??= []).push(i);
  }
  console.log(JSON.stringify({ total: issues.length, grouped }, null, 2));
}

main();
