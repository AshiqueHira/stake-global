"use client";
import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui";
const inquiryTypes = [
  "general",
  "account",
  "platform",
  "investor",
  "partnership",
];
const endpoint = `${(process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "")}/api/inquiry/`;
type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export function InquiryForm({ initialType }: { initialType?: string }) {
  const selectedType = inquiryTypes.includes(initialType ?? "")
    ? initialType
    : "general";
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          result.error || "Your inquiry could not be sent. Please try again.",
        );
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error && error.message !== "Failed to fetch"
            ? error.message
            : "Your inquiry could not be sent. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} id="inquiry-form">
      <h2>Your inquiry</h2>
      <p className="form-note">
        Tell us how we can help and our team will reply by email.
      </p>
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
      <div className="field-grid">
        <label htmlFor="phone">
          Contact number <span className="muted">(optional)</span>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            pattern="\+?[0-9\s\(\)\.\-]{6,30}"
            title="Digits, spaces and + ( ) - only"
            placeholder="+44 20 1234 5678"
          />
        </label>
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
      </div>
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
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">
          Leave this field empty
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <button
        className="btn"
        type="submit"
        disabled={status.state === "sending"}
      >
        {status.state === "sending" ? "Sending…" : "Send Inquiry"}{" "}
        <span className="arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </button>
      <div role="status" aria-live="polite">
        {status.state === "sent" && (
          <div className="notice">
            <strong>Thank you, your inquiry has been sent.</strong>Our team
            will get back to you by email.
          </div>
        )}
        {status.state === "error" && (
          <div className="notice">
            <strong>Something went wrong.</strong>
            {status.message}
          </div>
        )}
      </div>
      <p className="form-caption">
        Required fields are marked *. No account is created by completing this
        form.
      </p>
    </form>
  );
}
