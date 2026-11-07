import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "next/link";
import { Arrow } from "@/components/ui";

import { pageMetadata } from "@/lib/site";
import { Suspense } from "react";
import { ContactInquiry } from "@/components/contact-inquiry";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata = pageMetadata(
  "Contact Our Team | Stake Global",
  "Explore contact options for Stake Global account, market, platform, investor, and partnership inquiries.",
  "/contact/",
);

export default function ContactPage() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="Contact" path="/contact/" />
        <h1>
          Let’s start
          <br />
          <span className="muted">a conversation.</span>
        </h1>
        <p className="intro">
          Questions about Stake Global, our platforms, or a potential
          partnership? Choose the type of conversation you would like to have.
        </p>
      </section>
      <section className="wrap contact-layout section content-divider">
        <div>
          <h2>
            The right conversation
            <br />
            starts here.
          </h2>
          <div className="contact-type">
            <h3>Account requests</h3>
            <p>
              Find out how our team guides you through the manual
              account-opening process.
            </p>
            <Link href="/open-account/">Explore the account process <Arrow /></Link>
          </div>
          <div className="contact-type">
            <h3>Markets & platforms</h3>
            <p>
              Ask about MetaFix, market coverage, or the details
              relevant to your inquiry.
            </p>
          </div>
          <div className="contact-type">
            <h3>Investors & partnerships</h3>
            <p>
              Discuss Stake Global’s vision and potential business
              opportunities.
            </p>
          </div>
          <div className="notice">
            <strong>Contact channels coming soon.</strong>Verified contact
            details and online inquiry delivery are not yet available in this
            website review.
          </div>
        </div>
        <Suspense fallback={<InquiryForm initialType="general" />}>
          <ContactInquiry />
        </Suspense>
      </section>
    </>
  );
}
