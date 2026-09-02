import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/content/site";
import { formatHandle } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "General contact for Zymosis Tattoo.",
};

export default function ContactPage() {
  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-7">
          <EditorialLabel>General</EditorialLabel>
          <DisplayHeading className="mt-6">Contact</DisplayHeading>
          <p className="mt-8 max-w-[34ch] text-paper/80">
            Tattoo projects go through the inquiry flow. For anything else,
            Instagram is the current public contact.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <TextLink href="/book">Start a project</TextLink>
            <TextLink href={site.instagramUrl} external>
              Instagram {formatHandle(site.instagramHandle)}
            </TextLink>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <EditorialLabel>Studio</EditorialLabel>
          <p className="mt-4">{site.locationLine}</p>
          <p className="todo-flag mt-6">TODO_CONTENT — email not published yet</p>
        </div>
      </EditorialGrid>
    </Section>
  );
}
