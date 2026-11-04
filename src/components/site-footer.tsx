import Link from "next/link";
import { Brand } from "./brand";
export function SiteFooter() {
  return (
    <footer className="wrap">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Trade Beyond the Limits.</p>
        </div>
        <div className="footer-col">
          <strong>Explore</strong>
          <Link href="/markets/">Markets</Link>
          <Link href="/platforms/">Platforms</Link>
          <Link href="/open-account/">Open an Account</Link>
        </div>
        <div className="footer-col">
          <strong>Company</strong>
          <Link href="/about/">About Stake Global</Link>
          <Link href="/about/#approach">Our Approach</Link>
          <Link href="/contact/">Contact Our Team</Link>
        </div>
        <div className="footer-col">
          <strong>Information</strong>
          <Link href="/faqs/">FAQs</Link>
          <Link href="/important-information/">Important Information</Link>
        </div>
      </div>
      <div className="footer-risk">
        Trading financial instruments involves risk. Understand the risks
        associated with the products you intend to trade before making a
        decision. The information on this website is general information and is
        not personalised investment advice.
      </div>
      <div className="footer-end">
        <span>© 2026 Stake Global. All rights reserved.</span>
        <span className="preview-note">
          Private website review · Legal information awaiting approval
        </span>
      </div>
    </footer>
  );
}
