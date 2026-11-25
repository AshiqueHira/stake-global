import { Resend } from "resend";

const inquiryLabels: Record<string, string> = {
  general: "General inquiry",
  account: "Account request",
  platform: "Market or platform inquiry",
  investor: "Investor inquiry",
  partnership: "Partnership opportunity",
};

const limits = { name: 150, email: 254, phone: 30, company: 200, message: 5000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{6,30}$/;

function field(data: Record<string, unknown>, key: string) {
  const value = data[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fail(error: string, status: number) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from =
    process.env.INQUIRY_FROM_EMAIL || "Stake Global <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Inquiry email is not configured: set RESEND_API_KEY and INQUIRY_TO_EMAIL.");
    return fail("Inquiries are temporarily unavailable.", 503);
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  // Honeypot: real users never fill this hidden field.
  if (field(data, "website")) return Response.json({ ok: true });

  const name = field(data, "name");
  const email = field(data, "email");
  const phone = field(data, "phone");
  const company = field(data, "company");
  const inquiry = field(data, "inquiry");
  const message = field(data, "message");

  if (!name || !email || !message || !inquiryLabels[inquiry]) {
    return fail("Please complete all required fields.", 400);
  }
  if (!emailPattern.test(email)) {
    return fail("Please enter a valid email address.", 400);
  }
  if (phone && !phonePattern.test(phone)) {
    return fail("Please enter a valid contact number.", 400);
  }
  if (
    name.length > limits.name ||
    email.length > limits.email ||
    phone.length > limits.phone ||
    company.length > limits.company ||
    message.length > limits.message
  ) {
    return fail("One or more fields are too long.", 400);
  }

  const label = inquiryLabels[inquiry];
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Contact number", phone || "—"],
    ["Company", company || "—"],
    ["Inquiry type", label],
  ];
  const html = `
    <h2>New ${escapeHtml(label.toLowerCase())}</h2>
    <table cellpadding="6">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((addr) => addr.trim()),
    replyTo: email,
    subject: `${label}: ${name.replace(/[\r\n]+/g, " ").slice(0, 80)}`,
    html,
    text,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return fail("Your inquiry could not be sent. Please try again later.", 502);
  }
  return Response.json({ ok: true });
}
