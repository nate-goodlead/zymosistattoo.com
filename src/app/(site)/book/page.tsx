import type { Metadata } from "next";
import { InquirySection } from "@/components/booking/InquirySection";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { publishedAvailableDesigns } from "@/content/available";
import { inquiryIntents, type InquiryIntent } from "@/lib/validation/inquiry";

export const metadata: Metadata = {
  title: "Book",
  description: "Start a custom tattoo or available-design inquiry with Zymosis Tattoo.",
};

function isIntent(value: string | undefined): value is InquiryIntent {
  return inquiryIntents.includes(value as InquiryIntent);
}

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string; design?: string }>;
}) {
  const params = await searchParams;
  const defaultIntent = isIntent(params.intent) ? params.intent : undefined;
  const design = publishedAvailableDesigns().find(
    (item) => item.slug === params.design,
  );
  const defaultIdea = design
    ? `I would like the available design (${design.slug}).`
    : undefined;

  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12">
          <InquirySection
            label="Inquiry"
            headingAs="h1"
            heading={
              <>
                Have something
                <br />
                <em>in mind?</em>
              </>
            }
            defaultIntent={defaultIntent}
            defaultIdea={defaultIdea}
          />
        </div>
      </EditorialGrid>
    </Section>
  );
}
