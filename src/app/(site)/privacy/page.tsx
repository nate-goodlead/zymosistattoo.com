import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Zymosis Tattoo inquiries.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Legal</EditorialLabel>
          <DisplayHeading className="mt-6">Privacy</DisplayHeading>
          <div className="mt-10 max-w-[62ch] space-y-6 text-paper/85">
            <p>
              {site.displayName} will collect only what is needed to review a
              tattoo inquiry. That can include your name, contact details,
              project description, and reference images.
            </p>
            <p>
              Body-placement photographs and reference uploads are treated as
              private inquiry data. They are not published in the portfolio.
            </p>
            <p className="todo-flag">
              TODO_CONTENT — full privacy notice, retention period, legal
              identity and cookie/analytics decision must be reviewed before
              launch.
            </p>
          </div>
        </div>
      </EditorialGrid>
    </Section>
  );
}
