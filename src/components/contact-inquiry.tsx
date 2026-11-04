"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm } from "./inquiry-form";

export function ContactInquiry() {
  const searchParams = useSearchParams();
  const inquiry = searchParams.get("inquiry") ?? "general";
  return <InquiryForm key={inquiry} initialType={inquiry} />;
}
