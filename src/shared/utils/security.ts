const SAFE_EXTERNAL_PROTOCOLS = ["https:", "mailto:", "tel:"] as const;
const SAFE_INTERNAL_PREFIXES = ["#", "/"] as const;

export function isSafeHref(href: string): boolean {
  if (SAFE_INTERNAL_PREFIXES.some((prefix) => href.startsWith(prefix))) {
    return true;
  }

  try {
    const url = new URL(href);
    return SAFE_EXTERNAL_PROTOCOLS.some((protocol) => protocol === url.protocol);
  } catch {
    return false;
  }
}

export function getSafeHref(href: string): string {
  return isSafeHref(href) ? href : "#";
}
