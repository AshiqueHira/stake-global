import { Breadcrumbs } from "@/components/breadcrumbs";

import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Important Information | Stake Global",
  "Review the status of company, legal, regulatory, and privacy information for the Stake Global website preview.",
  "/important-information/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs
          label="Important Information"
          path="/important-information/"
        />
        <h1>
          Clarity matters.
          <br />
          <span className="muted">So does the detail.</span>
        </h1>
        <p className="intro">
          Important information about the status of this website review and the
          policies required before launch.
        </p>
      </section>
      <section className="wrap section content-divider">
        <div className="legal-content">
          <div className="notice">
            <strong>Private website review</strong>Approved legal and regulatory
            documents have not yet been supplied. This page is a review status
            notice and does not replace the required policies or disclosures.
          </div>
          <h2>Company and regulatory information</h2>
          <p>
            The full legal entity details, permitted activities, eligible client
            jurisdictions, and any applicable regulatory statements require
            confirmation. A UAE location does not by itself establish regulatory
            permissions or authorisation to serve clients globally.
          </p>
          <h2>Risk disclosures</h2>
          <p>
            Trading financial instruments involves risk. Product-specific risk
            disclosures and any required warning wording must be confirmed for
            the actual offering before launch.
          </p>
          <h2>Privacy, terms, and cookies</h2>
          <p>
            Approved Privacy Policy, Terms & Conditions, and any applicable
            Cookie Policy are pending. The preview inquiry form does not submit
            or save entered information. No analytics or advertising trackers
            have been added to the website code.
          </p>
          <h2>Account requests</h2>
          <p>
            Account opening is handled manually by the team outside this
            website. An inquiry does not create an account and does not
            constitute account approval. This website does not provide trading,
            deposits, or customer account management.
          </p>
        </div>
      </section>
    </>
  );
}
