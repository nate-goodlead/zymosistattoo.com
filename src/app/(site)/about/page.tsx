import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { processSteps, site } from "@/content/site";
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
            alt="TODO_CONTENT — artist portrait required"
            width={4}
            height={5}
            label="Portrait"
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
          <p className="mt-4 text-[length:var(--text-lead)]">{site.locationLine}</p>
          <p className="mt-6 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
            Instagram {formatHandle(site.instagramHandle)}
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <EditorialLabel>Process</EditorialLabel>
          <ul className="mt-6 grid gap-6">
            {processSteps.map((step) => (
              <li key={step.index}>
                <p className="uppercase tracking-[0.14em] text-graphite">
                  {step.index} {step.title}
                </p>
                <p className="mt-2 max-w-[40ch] text-paper/80">{step.copy}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 mt-8">
          <TextLink href="/book">Start a project</TextLink>
        </div>
      </EditorialGrid>
    </Section>
  );
}
