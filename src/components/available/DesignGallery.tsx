"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import type { AvailableDesign } from "@/types/content";

type DesignGalleryProps = {
  designs: AvailableDesign[];
  dense?: boolean;
};

export function DesignGallery({ designs, dense = false }: DesignGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const active = designs.find((design) => design.slug === activeSlug) ?? null;

  useEffect(() => {
    if (!active) {
      document.body.classList.remove("design-overlay-open");
      return;
    }

    document.body.classList.add("design-overlay-open");
    overlayRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveSlug(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("design-overlay-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  if (designs.length === 0) {
    return null;
  }

  const overlay = active ? (
    <div
      ref={overlayRef}
      className="design-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setActiveSlug(null);
        }
      }}
    >
      <div className="design-overlay-panel">
        <div className="design-overlay-bar">
          <p id={titleId} className="design-overlay-title">
            {active.title ?? "Available work"}
          </p>
          <button type="button" className="menu-trigger" onClick={() => setActiveSlug(null)}>
            Close
          </button>
        </div>
        <ImageFrame
          alt={active.imageAlt}
          src={active.imageSrc}
          width={active.width}
          height={active.height}
          sizes="(min-width: 768px) 52rem, 92vw"
          caption={`${active.status}${active.sizeGuidance ? ` / ${active.sizeGuidance}` : ""}${active.placementGuidance ? ` / ${active.placementGuidance}` : ""}`}
        />
        {active.story ? (
          <div className="design-overlay-copy">
            <p className="editorial-label">Background</p>
            <p>{active.story}</p>
          </div>
        ) : null}
        {active.processImages.length > 0 ? (
          <div className="design-overlay-process">
            <p className="editorial-label">Work process</p>
            <div className="design-overlay-process-grid">
              {active.processImages.map((image) => (
                <ImageFrame
                  key={image.src}
                  alt={image.alt}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 768px) 24rem, 90vw"
                />
              ))}
            </div>
          </div>
        ) : null}
        <div className="design-overlay-cta">
          <TextLink href={`/book?intent=available&design=${active.slug}`}>
            {active.status === "available" ? "Inquire about this" : "Inquire for similar"}
          </TextLink>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className={dense ? "design-thumbs design-thumbs-dense" : "design-thumbs"}>
        {designs.map((design, index) => (
          <button
            key={design.id}
            type="button"
            className="design-thumb"
            onClick={() => setActiveSlug(design.slug)}
          >
            <ImageFrame
              alt={design.imageAlt}
              src={design.imageSrc}
              width={4}
              height={5}
              sizes="(min-width: 1200px) 14vw, (min-width: 768px) 22vw, 44vw"
              caption={`${String(index + 1).padStart(2, "0")} / ${design.title ?? "Untitled"}`}
            />
          </button>
        ))}
      </div>
      {overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
