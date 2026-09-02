import type { ReactNode } from "react";

type DisplayHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function DisplayHeading({
  children,
  as: Tag = "h1",
  className,
}: DisplayHeadingProps) {
  return (
    <Tag className={["display-heading", className ?? ""].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
