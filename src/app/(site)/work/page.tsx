import type { Metadata } from "next";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { publishedWorks } from "@/content/works";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected tattoo work by Zymosis Tattoo.",
};

export default function WorkPage() {
  const works = publishedWorks();

  return (
    <Section>
      <EditorialGrid>
        <div className="col-span-12 md:col-span-8">
          <EditorialLabel>Exhibition</EditorialLabel>
          <DisplayHeading className="mt-6">Work</DisplayHeading>
        </div>
        {works.map((work, index) => (
          <article
            key={work.id}
            className={
              index % 3 === 0
                ? "col-span-12 md:col-span-7"
                : "col-span-12 md:col-span-5"
            }
          >
            <ImageFrame
              alt={work.imageAlt}
              src={work.imageSrc}
              width={work.width}
              height={work.height}
              label={String(index + 1).padStart(2, "0")}
              caption={`${String(index + 1).padStart(2, "0")} / ${work.category}`}
            />
          </article>
        ))}
      </EditorialGrid>
    </Section>
  );
}
