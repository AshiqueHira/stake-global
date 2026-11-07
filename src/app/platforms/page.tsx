import { assetPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "MetaTrader & MT5 Trading Platforms | Stake Global",
  "Discover MetaTrader and MetaFix, available through Stake Global. Speak with our team about platform access and account requirements.",
  "/platforms/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="Platforms" path="/platforms/" />
        <h1>
          Established technology.
          <br />
          <span className="muted">Your trading environment.</span>
        </h1>
        <p className="intro">
          MetaTrader and MetaFix are available through Stake Global. Our team
          can guide you on platform access and the requirements for your
          account.
        </p>
      </section>
      <div className="wrap">
        <img
          className="full-art"
          src={assetPath("/assets/platforms-glass.webp")}
          srcSet={
            assetPath("/assets/platforms-glass-small.webp") +
            " 768w" +
            ", " +
            assetPath("/assets/platforms-glass.webp") +
            " 1536w"
          }
          sizes="(max-width: 1600px) 90vw, 1424px"
          width="1536"
          height="1024"
          alt=""
          loading="lazy"
        />
      </div>
      <section className="wrap section two-col">
        <article className="platform-page-card">
          <div className="eyebrow">Available through Stake Global</div>
          <h2>MetaTrader</h2>
          <p>
            A familiar environment for charting, technical analysis, and
            automated trading through Expert Advisors.
          </p>
          <ul>
            <li>Charting and technical analysis</li>
            <li>Expert Advisor capabilities</li>
            <li>Established trading environment</li>
          </ul>
          <TextLink href="/contact/?inquiry=platform">
            Ask about MetaTrader
          </TextLink>
        </article>
        <article className="platform-page-card">
          <div className="eyebrow">Available through Stake Global</div>
          <h2>
            <img
              className="platform-logo platform-logo-lg"
              src={assetPath("/assets/metafix-logo.png")}
              width="1263"
              height="343"
              alt="MetaFix"
            />
          </h2>
          <p>
            An established platform for charting, technical analysis, and
            automated trading, with features determined by the supported
            configuration.
          </p>
          <ul>
            <li>Charting and analytical tools</li>
            <li>Automated trading capabilities</li>
            <li>Configuration-specific market access</li>
          </ul>
          <TextLink href="/contact/?inquiry=platform">Ask about MetaFix</TextLink>
        </article>
      </section>
      <div className="wrap section content-divider">
        <div className="notice">
          <strong>
            Platform features depend on your account and configuration.
          </strong>
          Confirm supported instruments and enabled features with our team.
          Platform availability does not imply that every standard platform
          feature or market is available on every account.
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
