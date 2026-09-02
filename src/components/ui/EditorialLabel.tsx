import type { ReactNode } from "react";

type EditorialLabelProps = {
  children: ReactNode;
  index?: string;
};

export function EditorialLabel({ children, index }: EditorialLabelProps) {
  return (
    <p className="editorial-label">
      {index ? <span>{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
