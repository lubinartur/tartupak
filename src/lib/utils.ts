export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Splits hero headline on *highlight* markers from message strings. */
export function parseHeroHeadline(text: string) {
  const match = text.match(/^([\s\S]*?)\*([\s\S]+?)\*([\s\S]*)$/);
  if (!match) {
    return { before: text, highlight: null, after: "" };
  }
  return {
    before: match[1],
    highlight: match[2],
    after: match[3],
  };
}
