import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { previewAvailableDesigns } from "@/content/available";
import { processSteps, site } from "@/content/site";
import { featuredWorks } from "@/content/works";
import { formatHandle } from "@/lib/site";

const featuredSpans = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5 md:mt-28",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-start-6 md:col-span-6",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-start-7 md:col-span-6",
];

export default function HomePage() {
  const works = featuredWorks(6);
  const designs = previewAvailableDesigns(3);

  return (
    <>
      <Section className="pt-[clamp(4rem,12vh,8rem)]">
        <EditorialGrid>
          <div className="col-span-12 lg:col-span-8">
            <EditorialLabel>
              {site.roleLine} / {site.locationLine}
            </EditorialLabel>
            <DisplayHeading className="mt-6">
              Zymosis
              <br />
              <em>Tattoo</em>
            </DisplayHeading>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-8 lg:col-span-4 lg:items-end">
            <TextLink href="/book">Start a project</TextLink>
            <div className="w-full max-w-sm lg:max-w-none">
              <ImageFrame
                alt="TODO_CONTENT — hero portrait or tattoo crop required"
                width={4}
                height={5}
                label="Hero"
              />
            </div>
          </div>
        </EditorialGrid>
      </Section>

      <Section invert compact>
        <EditorialGrid>
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <EditorialLabel>Statement</EditorialLabel>
            <p className="statement-heading mt-6 text-[length:var(--text-section)] leading-[0.94]">
              {site.statement}
            </p>
            <p className="todo-flag mt-4">{site.statementFlag}</p>
          </div>
        </EditorialGrid>
      </Section>

      <Section>
        <EditorialGrid>
          <div className="col-span-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <EditorialLabel index="01">Selected work</EditorialLabel>
              <h2 className="section-heading mt-4">Work</h2>
            </div>
            <TextLink href="/work">View all work</TextLink>
          </div>
          {works.map((work, index) => (
            <article key={work.id} className={featuredSpans[index] ?? "col-span-12"}>
              <ImageFrame
                alt={work.imageAlt}
                src={work.imageSrc}
                width={work.width}
                height={work.height}
                label={String(index + 1).padStart(2, "0")}
                caption={`${String(index + 1).padStart(2, "0")} / ${work.category}${work.status !== "unknown" ? ` / ${work.status}` : ""}`}
              />
            </article>
          ))}
        </EditorialGrid>
      </Section>

      <Section invert>
        <EditorialGrid>
          <div className="col-span-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <EditorialLabel index="02">Flash</EditorialLabel>
              <h2 className="section-heading mt-4">Available</h2>
            </div>
            <TextLink href="/available">View available work</TextLink>
          </div>
          {designs.map((design, index) => (
            <article
              key={design.id}
              className="col-span-12 md:col-span-4"
            >
              <ImageFrame
                alt={design.imageAlt}
                src={design.imageSrc}
                width={4}
                height={5}
                label={String(index + 1).padStart(2, "0")}
                caption={`${design.status} / ${design.title ?? "Untitled"}`}
              />
            </article>
          ))}
        </EditorialGrid>
      </Section>

      <Section>
        <EditorialGrid>
          <div className="col-span-12">
            <EditorialLabel index="03">Process</EditorialLabel>
          </div>
          {processSteps.map((step) => (
            <article key={step.index} className="col-span-12 md:col-span-4">
              <p className="editorial-label">{step.index}</p>
              <h2 className="mt-4 text-[length:var(--text-lead)] uppercase tracking-[-0.04em]">
                {step.title}
              </h2>
              <p className="mt-4 max-w-[28ch] text-paper/80">{step.copy}</p>
              {step.contentFlag ? (
                <p className="todo-flag mt-3">{step.contentFlag}</p>
              ) : null}
            </article>
          ))}
        </EditorialGrid>
      </Section>

      <Section invert>
        <EditorialGrid>
          <div className="col-span-12 md:col-span-5">
            <ImageFrame
              alt="TODO_CONTENT — artist portrait required"
              width={4}
              height={5}
              label="Artist"
            />
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-6 md:col-start-7">
            <EditorialLabel index="04">The artist</EditorialLabel>
            <p className="lead mt-6">{site.aboutPreview}</p>
            <p className="todo-flag mt-3">{site.aboutPreviewFlag}</p>
            <div className="mt-8">
              <TextLink href="/about">About Zymosis</TextLink>
            </div>
          </div>
        </EditorialGrid>
      </Section>

      <Section>
        <EditorialGrid>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display-heading">
              Have something
              <br />
              <em>in mind?</em>
            </h2>
            <div className="mt-10">
              <TextLink href="/book">Start a project</TextLink>
            </div>
          </div>
          <p className="col-span-12 mt-16 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
            {site.locationLine} / Instagram {formatHandle(site.instagramHandle)}
          </p>
        </EditorialGrid>
      </Section>
    </>
  );
}
