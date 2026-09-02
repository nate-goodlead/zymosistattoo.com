import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function TextLink({ href, children, external = false }: TextLinkProps) {
  return (
    <a
      href={href}
      className="text-link"
      {...(external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : undefined)}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
