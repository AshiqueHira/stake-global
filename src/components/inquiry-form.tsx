"use client";
import { ArrowIcon } from "@/components/ui";
const inquiryTypes = [
  "general",
  "account",
  "platform",
  "investor",
  "partnership",
];
export function InquiryForm({ initialType }: { initialType?: string }) {
  const selectedType = inquiryTypes.includes(initialType ?? "")
    ? initialType
    : "general";
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      id="inquiry-form"
      aria-describedby="form-availability"
    >
      <h2>Your inquiry</h2>
      <p className="form-note">
        Select an inquiry type to explore the contact experience.
      </p>
      <div className="notice" id="form-availability">
        <strong>Submissions are currently unavailable.</strong>This preview form
        does not send or save your information. Please do not enter sensitive
        information. Inquiry delivery will be enabled once contact routing and
        the privacy notice are confirmed.
      </div>
      <div className="field-grid">
        <label htmlFor="full-name">
          Full name <span aria-hidden="true">*</span>
          <input
            id="full-name"
            name="name"
            autoComplete="name"
            required
            maxLength={150}
            placeholder="Your full name"
          />
        </label>
        <label htmlFor="email">
          Email address <span aria-hidden="true">*</span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label htmlFor="company">
        Company name <span className="muted">(optional)</span>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={200}
          placeholder="Your company"
        />
      </label>
      <label htmlFor="inquiry-type">
        Inquiry type <span aria-hidden="true">*</span>
        <select
          defaultValue={selectedType}
          id="inquiry-type"
          name="inquiry"
          required
        >
          <option value="general">General inquiry</option>
          <option value="account">Account request</option>
          <option value="platform">Market or platform inquiry</option>
          <option value="investor">Investor inquiry</option>
          <option value="partnership">Partnership opportunity</option>
        </select>
      </label>
      <label htmlFor="message">
        Message <span aria-hidden="true">*</span>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          placeholder="How can our team help?"
        ></textarea>
      </label>
      <button className="btn" type="submit" disabled>
        Send Inquiry{" "}
        <span className="arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </button>
      <p className="form-caption">
        Required fields are marked *. No account is created by completing this
        form.
      </p>
    </form>
  );
}
