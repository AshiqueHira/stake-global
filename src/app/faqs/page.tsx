import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink, TextLink, FAQItem } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Frequently Asked Questions | Stake Global",
  "Find answers about Stake Global, available platforms, market coverage, and the manual account-request process.",
  "/faqs/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="FAQs" path="/faqs/" />
        <h1>
          Questions,
          <br />
          <span className="muted">answered.</span>
        </h1>
        <p className="intro">
          Clear information about Stake Global, the platforms, and how account
          requests work.
        </p>
      </section>
      <section className="wrap section content-divider">
        <div className="page-faq">
          <FAQItem question="Which trading platforms are available?">
            MetaFix is available through Stake Global. Contact
            our team for information about access and your account requirements.
          </FAQItem>
          <FAQItem question="How do I open an account?">
            Account opening is handled manually by our team outside this
            website. The Open an Account page explains the process. An account
            request does not create an account or constitute approval.
          </FAQItem>
          <FAQItem question="Which markets does Stake Global cover?">
            Stake Global covers Forex, Metals, and Indices. Contact our team for
            the specific instruments, trading conditions, and eligibility
            relevant to your request.
          </FAQItem>
          <FAQItem question="Can I trade or deposit through this website?">
            This website provides brand, market, and platform information.
            Trading, deposits, and account management are not provided through
            this website.
          </FAQItem>
          <FAQItem question="Can investors and business partners get in touch?">
            Yes. The contact page includes investor and partnership inquiry
            options, alongside general and platform inquiries.
          </FAQItem>
        </div>
        <div className="below-link">
          <TextLink href="/contact/">Contact Our Team</TextLink>
        </div>
      </section>
      <section className="wrap cta-band" aria-label="Contact Stake Global">
        <h2>
          Your next move.
          <br />
          Let’s talk.
        </h2>
        <ButtonLink href="/contact/" className="white">
          Contact Our Team
        </ButtonLink>
      </section>
    </>
  );
}
