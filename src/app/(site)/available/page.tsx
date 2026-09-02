import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { publishedAvailableDesigns } from "@/content/available";

export const metadata: Metadata = {
  title: "Available work",
  description: "Pre-designed tattoos available from Zymosis Tattoo, subject to artist confirmation.",
};

export default function AvailablePage() {
  const designs = publishedAvailableDesigns();

  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Flash</EditorialLabel>
          <DisplayHeading className="mt-6">
            Available
            <br />
            <em>work</em>
          </DisplayHeading>
          <p className="mt-8 max-w-[36ch] text-paper/80">
            Pre-designed pieces available for tattooing, subject to artist
            confirmation. Availability can change.
          </p>
        </div>
        {designs.length === 0 ? (
          <div className="col-span-12 md:col-span-6">
            <p className="lead">New designs are released periodically.</p>
            <div className="mt-8">
              <TextLink href="/book">Start a custom project</TextLink>
            </div>
          </div>
        ) : (
          designs.map((design, index) => (
            <article key={design.id} className="col-span-12 md:col-span-4">
              <ImageFrame
                alt={design.imageAlt}
                src={design.imageSrc}
                width={4}
                height={5}
                label={String(index + 1).padStart(2, "0")}
                caption={`${design.status} / ${design.sizeGuidance ?? "size TBC"}`}
              />
              <div className="mt-5">
                <TextLink href={`/book?intent=available&design=${design.slug}`}>
                  Inquire about this
                </TextLink>
              </div>
            </article>
          ))
        )}
      </EditorialGrid>
    </Section>
  );
}
