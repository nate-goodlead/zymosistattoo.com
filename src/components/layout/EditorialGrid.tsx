import type { ReactNode } from "react";

type EditorialGridProps = {
  children: ReactNode;
  className?: string;
};

export function EditorialGrid({ children, className }: EditorialGridProps) {
  return (
    <div className={["editorial-grid", className ?? ""].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
