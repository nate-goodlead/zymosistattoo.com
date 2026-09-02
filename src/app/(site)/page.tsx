import Image from "next/image";
import { DesignGallery } from "@/components/available/DesignGallery";
import { InquirySection } from "@/components/booking/InquirySection";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import { previewAvailableDesigns } from "@/content/available";
import { howWeDoSteps, site, studioImages } from "@/content/site";
import { featuredWorks, workBySlug } from "@/content/works";
import { formatHandle } from "@/lib/site";

const featuredSpans = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5 md:mt-28",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-start-6 md:col-span-6",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-start-7 md:col-span-6",
];

const heroWork = workBySlug("swallow-shoulder");
const processPreview = howWeDoSteps.slice(0, -1);
const processCloser = howWeDoSteps[howWeDoSteps.length - 1];

export default function HomePage() {
  const works = featuredWorks(6);
  const designs = previewAvailableDesigns();

  return (
    <>
      <section className="hero">
        {heroWork?.imageSrc ? (
          <div className="hero-media">
            <Image
              src={heroWork.imageSrc}
              alt={heroWork.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="hero-scrim" />
          </div>
        ) : null}
        <div className="hero-copy">
          <EditorialLabel>
            {site.roleLine} / {site.locationLine}
          </EditorialLabel>
          <DisplayHeading className="mt-6">
            Zymosis
            <br />
            <em>Tattoo</em>
          </DisplayHeading>
          <div className="mt-10">
            <TextLink href="/book">Start a project</TextLink>
          </div>
        </div>
      </section>

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
          <div className="col-span-12">
            <DesignGallery designs={designs} dense />
          </div>
        </EditorialGrid>
      </Section>

      <Section>
        <EditorialGrid>
          <div className="col-span-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <EditorialLabel index="03">Process</EditorialLabel>
              <h2 className="section-heading mt-4">How we do</h2>
            </div>
            <TextLink href="/how-we-do">Read the process</TextLink>
          </div>
          {processPreview.map((step) => (
            <article key={step.index} className="col-span-12 md:col-span-6 lg:col-span-3">
              <p className="editorial-label">{step.index}</p>
              <h2 className="mt-4 text-[length:var(--text-lead)] uppercase tracking-[-0.04em]">
                {step.title}
              </h2>
              <p className="mt-4 max-w-[28ch] text-paper/80">{step.copy}</p>
            </article>
          ))}
          {processCloser ? (
            <article className="col-span-12">
              <p className="statement-heading mt-4 text-[length:var(--text-lead)]">
                {processCloser.title}.
              </p>
            </article>
          ) : null}
        </EditorialGrid>
      </Section>

      <Section invert>
        <EditorialGrid>
          <div className="col-span-12 md:col-span-5">
            <ImageFrame
              alt={studioImages.session.alt}
              src={studioImages.session.src}
              width={studioImages.session.width}
              height={studioImages.session.height}
              sizes="(min-width: 768px) 40vw, 100vw"
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
          <div className="col-span-12">
            <InquirySection
              label="Inquiry"
              heading={
                <>
                  Start a
                  <br />
                  <em>project</em>
                </>
              }
            />
          </div>
          <p className="col-span-12 mt-16 text-[length:var(--text-micro)] uppercase tracking-[0.16em] text-graphite">
            {site.locationLine} / Instagram {formatHandle(site.instagramHandle)}
          </p>
        </EditorialGrid>
      </Section>
    </>
  );
}
