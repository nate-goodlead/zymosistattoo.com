export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://zymosistattoo.com";
}

export function formatHandle(handle: string): string {
  return handle.startsWith("@") ? handle : `@${handle}`;
}
