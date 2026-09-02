import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  invert?: boolean;
  compact?: boolean;
  className?: string;
};

export function Section({
  children,
  id,
  invert = false,
  compact = false,
  className,
}: SectionProps) {
  const classes = [
    compact ? "section-compact" : "section",
    invert ? "surface-paper" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
