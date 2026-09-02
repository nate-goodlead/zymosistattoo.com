import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";
import { aftercareSections, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Aftercare",
  description: `Aftercare for tattoos by ${site.displayName}: the first weeks, second skin, bandages, and touch-ups.`,
};

export default function AftercarePage() {
  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Healing</EditorialLabel>
          <DisplayHeading className="mt-6">
            After
            <br />
            <em>care</em>
          </DisplayHeading>
          <p className="mt-8 max-w-[38ch] text-paper/80">
            Rules for the weeks after a session. Leave with the instructions
            from the studio; this is the outline.
          </p>
        </div>
        {aftercareSections.map((section, index) => (
          <article
            key={section.title}
            className="col-span-12 md:col-span-6"
          >
            <p className="editorial-label">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 text-[length:var(--text-lead)] uppercase tracking-[-0.04em]">
              {section.title}
            </h2>
            <p className="mt-4 max-w-[38ch] text-paper/80">{section.copy}</p>
          </article>
        ))}
        <div className="col-span-12 mt-4">
          <TextLink href="/book">Start a project</TextLink>
        </div>
      </EditorialGrid>
    </Section>
  );
}
