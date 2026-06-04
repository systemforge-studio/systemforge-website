export function isExternalHref(href: string): boolean {
  return href.startsWith("http");
}

export function getExternalLinkProps(href: string) {
  return isExternalHref(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}