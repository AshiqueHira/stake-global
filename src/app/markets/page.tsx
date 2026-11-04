import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Forex, Metals & Indices | Stake Global",
  "Explore the Forex, Metals, and Indices markets covered by Stake Global and learn what influences these financial markets.",
  "/markets/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="Markets" path="/markets/" />
        <h1>
          Global markets.
          <br />
          <span className="muted">A considered perspective.</span>
        </h1>
        <p className="intro">
          Explore Forex, Metals, and Indices through Stake Global. Learn what
          shapes these markets and speak with our team about specific
          instruments and availability.
        </p>
      </section>
      <div className="wrap">
        <section className="market-detail" id="forex">
          <div>
            <span className="num">01 / MARKET OVERVIEW</span>
            <h2>Forex</h2>
          </div>
          <div>
            <p>
              Currency markets reflect the relative value of one currency
              against another. Price movements are influenced by economic
              developments and changing expectations.
            </p>
            <h3>What moves the market?</h3>
            <p>
              Interest rates, inflation, economic releases, and geopolitical
              developments can influence currency prices.
            </p>
            <h3>Before you proceed</h3>
            <p>
              Ask our team about specific instruments, product structure,
              trading conditions, and eligibility. Market prices can move
              against your position.
            </p>
            <div className="below-link">
              <TextLink href="/contact/?inquiry=platform">
                Ask about Forex
              </TextLink>
            </div>
          </div>
        </section>
        <section className="market-detail" id="metals">
          <div>
            <span className="num">02 / MARKET OVERVIEW</span>
            <h2>Metals</h2>
          </div>
          <div>
            <p>
              Metals markets connect economic activity, supply, demand, and
              investor sentiment. Different metals can respond differently to
              changes in the global economy.
            </p>
            <h3>What moves the market?</h3>
            <p>
              Industrial demand, supply conditions, currency movements, and
              broader economic uncertainty can influence metal prices.
            </p>
            <h3>Before you proceed</h3>
            <p>
              Ask our team about specific instruments, product structure,
              trading conditions, and eligibility. Market prices can move
              against your position.
            </p>
            <div className="below-link">
              <TextLink href="/contact/?inquiry=platform">
                Ask about Metals
              </TextLink>
            </div>
          </div>
        </section>
        <section className="market-detail" id="indices">
          <div>
            <span className="num">03 / MARKET OVERVIEW</span>
            <h2>Indices</h2>
          </div>
          <div>
            <p>
              A market index measures the performance of a defined group of
              securities. It provides a way to observe movements across a
              segment of a financial market.
            </p>
            <h3>What moves the market?</h3>
            <p>
              Company earnings, sector developments, interest-rate expectations,
              and economic conditions can influence index movements.
            </p>
            <h3>Before you proceed</h3>
            <p>
              Ask our team about specific instruments, product structure,
              trading conditions, and eligibility. Market prices can move
              against your position.
            </p>
            <div className="below-link">
              <TextLink href="/contact/?inquiry=platform">
                Ask about Indices
              </TextLink>
            </div>
          </div>
        </section>
      </div>
      <div className="wrap section">
        <div className="notice">
          <strong>Understand the product before trading.</strong>Market
          descriptions are general information. They do not establish the terms
          of a particular product, account, or service. Confirm the relevant
          details with our team.
        </div>
      </div>
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
