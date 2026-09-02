"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { navItems, site } from "@/content/site";
import { formatHandle } from "@/lib/site";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const background = [
      document.querySelector(".site-header"),
      document.getElementById("main"),
      document.querySelector(".site-footer"),
    ].filter((node): node is Element => node !== null);

    document.documentElement.classList.toggle("menu-open", open);
    document.body.classList.toggle("menu-open", open);

    if (!open) {
      for (const node of background) {
        node.removeAttribute("inert");
      }
      if (wasOpen.current) {
        triggerRef.current?.focus();
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    for (const node of background) {
      node.setAttribute("inert", "");
    }
    const overlay = overlayRef.current;
    overlay?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !overlay) {
        return;
      }

      const nodes = Array.from(overlay.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (nodes.length === 0) {
        return;
      }

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault();
        lastNode.focus();
      } else if (!event.shiftKey && document.activeElement === lastNode) {
        event.preventDefault();
        firstNode.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      document.querySelector(".site-header")?.removeAttribute("inert");
      document.getElementById("main")?.removeAttribute("inert");
      document.querySelector(".site-footer")?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
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
        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>
      <div
        ref={overlayRef}
        id="site-menu"
        className="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        hidden={!open}
      >
        <div className="menu-panel">
          <div className="menu-overlay-bar">
            <p id={titleId} className="wordmark">
              <span>Zymo</span>
              <span className="wordmark-slash">/</span>
              <span>sis</span>
            </p>
            <button type="button" className="menu-trigger" onClick={close}>
              Close
            </button>
          </div>
          <nav className="menu-index" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={close}
              >
                <span>{item.index}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-meta">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={close}
            >
              Instagram {formatHandle(site.instagramHandle)}
            </a>
            <span>{site.locationLine}</span>
          </div>
        </div>
      </div>
    </>
  );
}
