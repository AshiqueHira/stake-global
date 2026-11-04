import { assetPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "About Stake Global | Our Vision & Approach",
  "Learn about Stake Global, a UAE-based trading brand with a global perspective and an approach centred on technology, clarity, and relationships.",
  "/about/",
);

export default function Page() {
  return (
    <>
      <section className="wrap page-hero">
        <Breadcrumbs label="About Stake Global" path="/about/" />
        <h1>
          A global vision.
          <br />
          <span className="muted">A clear sense of purpose.</span>
        </h1>
        <p className="intro">
          A UAE-based trading brand shaped by technology, clarity, and the
          ambition to build lasting relationships.
        </p>
      </section>
      <section className="wrap section content-divider story">
        <div>
          <div className="eyebrow">Our story</div>
          <h2 className="below-link">
            Looking ahead.
            <br />
            Thinking globally.
          </h2>
        </div>
        <div>
          <p>
            Stake Global brings an international perspective to the financial
            markets, with established trading platforms and a distinctive brand
            identity.
          </p>
          <p>
            Our direction is guided by a simple ambition: to bring together
            technology, clear communication, and a considered experience for
            prospective traders and business partners.
          </p>
          <p>
            We welcome conversations with those who share an interest in the
            company’s direction and long-term development.
          </p>
        </div>
      </section>
      <div className="wrap">
        <img
          className="full-art globe-art"
          src={assetPath("/assets/global-glass.webp")}
          srcSet={
            assetPath("/assets/global-glass-small.webp") +
            " 768w" +
            ", " +
            assetPath("/assets/global-glass.webp") +
            " 1536w"
          }
          sizes="(max-width: 1600px) 90vw, 1424px"
          width="1536"
          height="1024"
          alt=""
          loading="lazy"
        />
      </div>
      <section className="wrap section approach" id="approach">
        <div>
          <div className="eyebrow">Why Stake Global</div>
          <h2>
            Progress with
            <br />
            purpose.
          </h2>
          <p className="intro">
            Our approach centres on established technology, straightforward
            information, and meaningful business relationships.
          </p>
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
        <div className="wrap section two-col">
          <div>
            <div className="eyebrow">Our vision</div>
            <h2 className="below-link">
              A lasting
              <br />
              perspective.
            </h2>
            <p className="intro below-link" style={{ color: "#62605e" }}>
              To build a distinctive financial brand recognised for its
              forward-looking perspective, considered approach to technology,
              and lasting business relationships.
            </p>
          </div>
          <div>
            <div className="eyebrow">Our mission</div>
            <h2 className="below-link">
              Move forward
              <br />
              with clarity.
            </h2>
            <p className="intro below-link" style={{ color: "#62605e" }}>
              To bring together technology, clarity, and a customer-focused
              approach while building the foundations for long-term growth.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Investors & partnerships</div>
            <h2>
              Let’s explore
              <br />
              what comes next.
            </h2>
          </div>
          <p>
            Connect with our team to discuss the company’s vision, investment
            inquiries, or strategic partnership opportunities.
          </p>
        </div>
        <ButtonLink href="/contact/?inquiry=partnership" className="">
          Start a conversation
        </ButtonLink>
      </section>
    </>
  );
}
