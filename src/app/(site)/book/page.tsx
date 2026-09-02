import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/content/site";
import { formatHandle } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description: "Start a custom tattoo or available-design inquiry with Zymosis Tattoo.",
};

const upcomingSteps = [
  "Intent",
  "Idea",
  "Placement",
  "Size",
  "References",
  "Timing",
  "Budget",
  "Contact",
  "Review",
];

export default function BookPage() {
  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Inquiry</EditorialLabel>
          <DisplayHeading className="mt-6">
            Start a
            <br />
            <em>project</em>
          </DisplayHeading>
          <p className="mt-8 max-w-[36ch] text-paper/80">
            The full multi-step inquiry is next. Until it is live, send a clear
            request on Instagram. An inquiry is not a confirmed appointment.
          </p>
          <p className="todo-flag mt-4">{site.responseExpectationFlag}</p>
          <div className="mt-10">
            <TextLink href={site.instagramUrl} external>
              Instagram {formatHandle(site.instagramHandle)}
            </TextLink>
          </div>
        </div>
        <ol className="col-span-12 mt-8 grid gap-px border-t border-[color:var(--hairline-dark)] md:col-span-10">
          {upcomingSteps.map((step, index) => (
            <li
              key={step}
              className="grid grid-cols-[3rem_1fr] items-baseline border-b border-[color:var(--hairline-dark)] py-4"
            >
              <span className="text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="uppercase tracking-[-0.03em]">{step}</span>
            </li>
          ))}
        </ol>
      </EditorialGrid>
    </Section>
  );
}
