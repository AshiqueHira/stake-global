import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap section">
      <div className="eyebrow">404 / Page not found</div>
      <h1 className="below-link">
        Let’s find
        <br />
        your way back.
      </h1>
      <div className="actions">
        <Link className="btn " href="/">
          Return to Home
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
