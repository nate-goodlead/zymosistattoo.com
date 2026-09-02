import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { site, studioImages } from "@/content/site";
import { formatHandle } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.artistFirstName}, the artist behind ${site.displayName}.`,
};

export default function AboutPage() {
  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>The artist</EditorialLabel>
          <DisplayHeading className="mt-6">
            About
            <br />
            <em>{site.artistFirstName}</em>
          </DisplayHeading>
        </div>
        <div className="col-span-12 md:col-span-5">
          <ImageFrame
            alt={studioImages.session.alt}
            src={studioImages.session.src}
            width={studioImages.session.width}
            height={studioImages.session.height}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <p className="statement-heading text-[length:var(--text-lead)]">
            {site.statement}
          </p>
          <p className="todo-flag mt-3">{site.statementFlag}</p>
          <p className="mt-10 max-w-[38ch] text-paper/85">{site.aboutBio}</p>
          <p className="todo-flag mt-3">{site.aboutBioFlag}</p>
        </div>
        <div className="col-span-12 md:col-span-4">
          <EditorialLabel>Location</EditorialLabel>
          <p className="mt-4 text-[length:var(--text-lead)]">{site.studioName}</p>
          <p className="mt-3 text-paper/80">Haarlem</p>
          <p className="mt-6 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
            Instagram {formatHandle(site.instagramHandle)}
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <EditorialLabel>Process</EditorialLabel>
          <p className="mt-6 max-w-[40ch] text-paper/80">
            Get in touch, talk it through, come for a consult if needed, then
            book. Aftercare lives in its own page.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <TextLink href="/how-we-do">How we do</TextLink>
            <TextLink href="/aftercare">Aftercare</TextLink>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <ImageFrame
            alt={studioImages.machine.alt}
            src={studioImages.machine.src}
            width={studioImages.machine.width}
            height={studioImages.machine.height}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="col-span-12 mt-8">
          <TextLink href="/book">Start a project</TextLink>
        </div>
      </EditorialGrid>
    </Section>
  );
}
