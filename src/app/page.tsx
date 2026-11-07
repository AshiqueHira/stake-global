import { assetPath } from "@/lib/paths";
import { AccountSteps } from "@/components/account-steps";
import Link from "next/link";
import { ArrowIcon, ButtonLink, TextLink, FAQItem } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Stake Global | Trade Beyond the Limits.",
  "Explore Forex, Metals, and Indices with Stake Global. Discover available MetaTrader and MT5 platforms and learn how to connect with our team.",
  "/",
);

export default function Page() {
  return (
    <>
      <section className="hero">
        <picture>
          <source
            media="(max-width:760px)"
            srcSet={assetPath("/assets/red-glass-mobile.webp")}
          />
          <img
            className="hero-art"
            src={assetPath("/assets/red-glass-hero.webp")}
            width="1536"
            height="1024"
            alt=""
            fetchPriority="high"
          />
        </picture>
        <div className="wrap hero-content">
          <div className="eyebrow">A global outlook. A clear direction.</div>
          <h1>
            Trade Beyond
            <br />
            <span>the Limits.</span>
          </h1>
          <p>
            Explore Forex, Metals, and Indices with Stake Global. Your next step
            starts with a conversation.
          </p>
          <div className="actions">
            <ButtonLink href="/open-account/" className="">
              Open Live Account
            </ButtonLink>
            <ButtonLink href="/contact/" className="secondary">
              Login
            </ButtonLink>
          </div>
          <p className="micro">
            Our team will guide you through the account-opening process.
          </p>
        </div>
        <div className="hero-bottom">
          <span>Global perspective. Established technology.</span>
          <Link href="#markets">
            Explore Stake Global{" "}
            <span className="down" aria-hidden="true">
              <ArrowIcon direction="down" />
            </span>
          </Link>
        </div>
      </section>
      <div className="wrap market-strip">
        <span>YOUR CONNECTION TO THE MARKETS</span>
        <div className="strip-items">
          <span>Forex</span>
          <span>Metals</span>
          <span>Indices</span>
        </div>
      </div>
      <section className="wrap section" id="markets">
        <div className="section-head">
          <div>
            <div className="eyebrow">01 / Explore the markets</div>
            <h2>
              A world of markets.
              <br />A clearer perspective.
            </h2>
          </div>
          <p>
            Get to know the markets Stake Global covers, then speak with our
            team about the details.
          </p>
        </div>
        <Link className="market-row" href="/markets/#forex">
          <span className="num">01</span>
          <h3>Forex</h3>
          <p>
            Explore currency markets and the relationships between global
            economies.
          </p>
          <span className="circle-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>
        <Link className="market-row" href="/markets/#metals">
          <span className="num">02</span>
          <h3>Metals</h3>
          <p>
            Discover markets shaped by industrial demand, economic shifts, and
            global sentiment.
          </p>
          <span className="circle-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>
        <Link className="market-row" href="/markets/#indices">
          <span className="num">03</span>
          <h3>Indices</h3>
          <p>
            Explore the performance of groups of companies through market
            indices.
          </p>
          <span className="circle-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>
        <div className="section-bottom">
          <TextLink href="/markets/">Explore our markets</TextLink>
        </div>
      </section>
      <section className="platform-section">
        <div className="wrap section platform-grid">
          <div className="platform-visual">
            <img
              src={assetPath("/assets/technology-glass.webp")}
              srcSet={
                assetPath("/assets/technology-glass-small.webp") +
                " 768w" +
                ", " +
                assetPath("/assets/technology-glass.webp") +
                " 1536w"
              }
              sizes="(max-width: 760px) 90vw, 45vw"
              width="1536"
              height="1024"
              alt=""
              loading="lazy"
            />
            <div className="visual-label">
              <span>ESTABLISHED TECHNOLOGY</span>
              <span>STAKE GLOBAL / 02</span>
            </div>
          </div>
          <div className="platform-copy">
            <div className="eyebrow">02 / Trading platforms</div>
            <h2>
              Familiar platforms.
              <br />
              Fresh perspective.
            </h2>
            <p className="intro">
              Explore MetaTrader and MetaFix 5, available through Stake Global.
            </p>
            <div className="platform-list">
              <div className="platform-item">
                <strong>MetaTrader</strong>
                <span>Available</span>
              </div>
              <div className="platform-item">
                <strong>MetaFix 5</strong>
                <span>Available</span>
              </div>
            </div>
            <TextLink href="/platforms/">Discover the platforms</TextLink>
          </div>
        </div>
      </section>
      <section className="wrap section approach">
        <div>
          <div className="eyebrow">03 / The Stake Global approach</div>
          <h2>
            Built on clarity.
            <br />
            Driven by possibility.
          </h2>
          <p className="intro">
            A forward-looking trading brand with a global perspective and a
            considered approach to technology and relationships.
          </p>
          <div className="below-link">
            <TextLink href="/about/#approach">Why Stake Global</TextLink>
          </div>
        </div>
        <div>
          <div className="principle">
            <span>01</span>
            <div>
              <h3>Technology with purpose.</h3>
              <p>
                Established trading platforms, presented through a clear and
                considered digital experience.
              </p>
            </div>
          </div>
          <div className="principle">
            <span>02</span>
            <div>
              <h3>Clarity at every step.</h3>
              <p>
                Understand the markets, explore the platforms, and know how to
                take the next step with our team.
              </p>
            </div>
          </div>
          <div className="principle">
            <span>03</span>
            <div>
              <h3>Relationships that matter.</h3>
              <p>
                A long-term perspective on conversations with prospective
                traders, investors, and business partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="process">
        <div className="wrap section">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 / Your next step</div>
              <h2>
                A conversation first.
                <br />A guided path forward.
              </h2>
            </div>
            <p>
              Our team handles account opening personally, outside this website.
            </p>
          </div>
          <AccountSteps />
          <div className="section-bottom">
            <TextLink href="/open-account/">About account requests</TextLink>
          </div>
        </div>
      </section>
      <section className="wrap section company-band">
        <div className="company-mark" aria-hidden="true">
          STAKE<span>GLOBAL</span>
        </div>
        <div>
          <div className="eyebrow">05 / About Stake Global</div>
          <h2>
            A global vision.
            <br />A distinctive identity.
          </h2>
          <p className="intro">
            Based in the UAE, Stake Global brings a forward-looking perspective
            to trading technology and the financial markets. We welcome
            conversations with traders, investors, and strategic partners.
          </p>
          <TextLink href="/about/">Meet Stake Global</TextLink>
        </div>
      </section>
      <section className="wrap section faq-grid content-divider">
        <div>
          <div className="eyebrow">06 / Good to know</div>
          <h2>
            Clarity starts
            <br />
            with answers.
          </h2>
          <div className="below-link">
            <TextLink href="/faqs/">View all FAQs</TextLink>
          </div>
        </div>
        <div>
          <FAQItem question="Which trading platforms are available?">
            MetaTrader and MetaFix 5 are available through Stake Global. Contact
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
