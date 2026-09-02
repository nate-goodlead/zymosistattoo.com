import type { Metadata } from "next";
import { DesignGallery } from "@/components/available/DesignGallery";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";
import { publishedAvailableDesigns } from "@/content/available";

export const metadata: Metadata = {
  title: "Available work",
  description: "Designs from Zymosis Tattoo. Click a picture for a closer look — some include process and a short note.",
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
          <p className="mt-8 max-w-[40ch] text-paper/80">
            Smaller pictures. Click one to see it larger — some include process
            and a short note. Availability can change. Pieces already tattooed
            can still be a starting point.
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
          <div className="col-span-12">
            <DesignGallery designs={designs} />
          </div>
        )}
      </EditorialGrid>
    </Section>
  );
}
