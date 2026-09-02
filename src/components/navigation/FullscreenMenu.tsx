"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { navItems, site } from "@/content/site";
import { formatHandle } from "@/lib/site";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function FullscreenMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    if (!open) {
      triggerRef.current?.focus();
      return;
    }

    const overlay = overlayRef.current;
    const first = overlay?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

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
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="menu-trigger"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        ref={overlayRef}
        id="site-menu"
        className="menu-overlay"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        hidden={!open}
      >
        <div className="menu-panel">
          <div className="flex items-start justify-between gap-6">
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
              >
                <span>{item.index}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer noopener">
              Instagram {formatHandle(site.instagramHandle)}
            </a>
            <span>{site.locationLine}</span>
          </div>
        </div>
      </div>
    </>
  );
}
