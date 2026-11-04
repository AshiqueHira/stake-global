import { Breadcrumbs } from "@/components/breadcrumbs";
import { AccountSteps } from "@/components/account-steps";
import { ButtonLink, FAQItem } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Request an Account | Stake Global",
  "Learn how Stake Global handles account opening manually. Our team guides requests through the requirements, review, and approval process.",
  "/open-account/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="Open an Account" path="/open-account/" />
        <h1>
          Your next chapter.
          <br />
          <span className="muted">Let’s begin with a conversation.</span>
        </h1>
        <p className="intro">
          Our team handles account opening manually, outside this website. They
          will guide you through the requirements and explain the next steps.
        </p>
      </section>
      <section className="wrap request-lead">
        <AccountSteps />
        <div className="notice">
          <strong>A request is the first step.</strong>Submitting an inquiry
          does not create a trading account or constitute account approval.
          Account opening is subject to the applicable review and approval
          process.
        </div>
        <div className="actions">
          <ButtonLink href="/contact/?inquiry=account" className="">
            View account inquiry
          </ButtonLink>
          <ButtonLink href="/platforms/" className="secondary">
            Explore the platforms
          </ButtonLink>
        </div>
        <p className="micro">
          Online inquiry delivery is not yet available in this website review.
        </p>
      </section>
      <section className="wrap section content-divider faq-grid">
        <div>
          <div className="eyebrow">Before you begin</div>
          <h2>
            A little clarity.
            <br />A confident next step.
          </h2>
        </div>
        <div>
          <FAQItem question="Does clicking Open an Account create an account?">
            No. It takes you to information about requesting an account. Our
            team handles the opening process outside this website.
          </FAQItem>
          <FAQItem question="What information will I need?">
            Our team will explain the requirements that apply to your request.
            Please do not send identity documents or sensitive financial
            information through the preview inquiry form.
          </FAQItem>
          <FAQItem question="Can I deposit on this website?">
            No. This website does not provide deposits, trading, or customer
            account management.
          </FAQItem>
        </div>
      </section>
    </>
  );
}
