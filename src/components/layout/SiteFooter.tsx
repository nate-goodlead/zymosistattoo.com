import Link from "next/link";
import { site } from "@/content/site";
import { formatHandle } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="col-span-12 md:col-span-3">
        {site.displayName}
        <br />
        {site.locationLine}
      </p>
      <p className="col-span-6 md:col-span-3">
        <a href={site.instagramUrl} target="_blank" rel="noreferrer noopener">
          Instagram {formatHandle(site.instagramHandle)}
        </a>
      </p>
      <p className="col-span-6 md:col-span-3">
        <Link href="/contact">Contact</Link>
        <br />
        <Link href="/privacy">Privacy</Link>
      </p>
      <p className="col-span-12 md:col-span-3 md:text-right">
        Inquiry is not a confirmed appointment.
      </p>
    </footer>
  );
}
