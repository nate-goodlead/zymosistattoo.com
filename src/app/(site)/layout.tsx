import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/navigation/SiteHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <PageShell>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </PageShell>
  );
}
