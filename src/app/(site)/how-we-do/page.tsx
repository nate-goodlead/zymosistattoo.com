import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";
import { howWeDoSteps, site } from "@/content/site";

export const metadata: Metadata = {
  title: "How we do",
  description: `How a tattoo with ${site.displayName} happens, from the first idea to the appointment.`,
};

export default function HowWeDoPage() {
  const closer = howWeDoSteps[howWeDoSteps.length - 1];
  const steps = howWeDoSteps.slice(0, -1);

  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Process</EditorialLabel>
          <DisplayHeading className="mt-6">
            How
            <br />
            <em>we do</em>
          </DisplayHeading>
          <p className="mt-8 max-w-[36ch] text-paper/80">
            Getting a tattoo here is a short sequence. Share the idea, talk it
            through, come in if the piece needs a consult, then book.
          </p>
        </div>
        {steps.map((step) => (
          <article key={step.index} className="col-span-12 md:col-span-6">
            <p className="editorial-label">{step.index}</p>
            <h2 className="mt-4 text-[length:var(--text-lead)] uppercase tracking-[-0.04em]">
              {step.title}
            </h2>
            <p className="mt-4 max-w-[36ch] text-paper/80">{step.copy}</p>
          </article>
        ))}
        {closer ? (
          <article className="col-span-12 md:col-span-10">
            <p className="editorial-label">{closer.index}</p>
            <p className="statement-heading mt-6 text-[length:var(--text-section)] leading-[0.94]">
              {closer.title}.
            </p>
            <p className="mt-6 max-w-[34ch] text-paper/80">{closer.copy}</p>
            <div className="mt-10">
              <TextLink href="/book">Start a project</TextLink>
            </div>
          </article>
        ) : null}
      </EditorialGrid>
    </Section>
  );
}
