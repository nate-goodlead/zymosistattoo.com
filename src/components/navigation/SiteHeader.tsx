"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/site";
import { FullscreenMenu } from "@/components/navigation/FullscreenMenu";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Zymosis Tattoo home">
        <span>Zymo</span>
        <span className="wordmark-slash">/</span>
        <span>sis</span>
      </Link>
      <nav className="header-nav" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <FullscreenMenu key={pathname} />
    </header>
  );
}
