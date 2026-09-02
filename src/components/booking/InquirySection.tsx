import type { ReactNode } from "react";
import { InquiryForm } from "@/components/booking/InquiryForm";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import type { InquiryIntent } from "@/lib/validation/inquiry";

type InquirySectionProps = {
  label?: string;
  heading: ReactNode;
  headingAs?: "h1" | "h2";
  defaultIntent?: InquiryIntent;
  defaultIdea?: string;
};

export function InquirySection({
  label,
  heading,
  headingAs = "h2",
  defaultIntent,
  defaultIdea,
}: InquirySectionProps) {
  return (
    <div className="inquiry-section">
      {label ? <EditorialLabel>{label}</EditorialLabel> : null}
      <DisplayHeading as={headingAs} className="inquiry-section-heading">
        {heading}
      </DisplayHeading>
      <InquiryForm defaultIntent={defaultIntent} defaultIdea={defaultIdea} />
    </div>
  );
}
