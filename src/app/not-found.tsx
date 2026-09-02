import Link from "next/link";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { PageShell } from "@/components/layout/PageShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { TextLink } from "@/components/ui/TextLink";

export default function NotFound() {
  return (
    <PageShell>
      <SiteHeader />
      <main id="main">
        <section className="section">
          <EditorialGrid>
            <div className="col-span-12 md:col-span-8">
              <EditorialLabel>404</EditorialLabel>
              <DisplayHeading className="mt-6">
                Page
                <br />
                <em>not found</em>
              </DisplayHeading>
              <p className="mt-8 max-w-[30ch] text-paper/80">
                This path is not part of the exhibition.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <TextLink href="/">Back home</TextLink>
                <Link className="text-link" href="/work">
                  <span>Work</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </EditorialGrid>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
