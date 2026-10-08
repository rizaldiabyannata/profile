"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/content";

const sectors = ["Distribution / wholesale", "Tour & travel / rental", "Retail", "Hospitality", "Other"];
const topics: Record<string, string> = { erp: sectors[0], travel: sectors[1] };

// Static site: the form builds a WhatsApp message instead of posting to a server.
// ponytail: nothing is stored; add a route handler + spam guard when the site gets a backend.
export function ContactForm() {
  const [sector, setSector] = useState("");

  useEffect(() => {
    const t = new URLSearchParams(location.search).get("topic");
    if (t && topics[t]) setSector(topics[t]);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const line = (k: string, label: string) => (f.get(k) ? `\n${label}: ${f.get(k)}` : "");
    const msg =
      "Hi ATO Team, I'd like a free consultation." +
      line("name", "Name") +
      line("company", "Company") +
      line("sector", "Sector") +
      line("needs", "What I need") +
      line("budget", "Budget");
    location.assign(waLink(msg));
  }

  return (
    <form className="label form" onSubmit={onSubmit}>
      <div className="label-row label-head">
        <span>Consultation request</span>
        <span>Sent via WhatsApp</span>
      </div>
      <div className="label-body form-grid">
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Company
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          Sector
          <select name="sector" required value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="" disabled>
              Choose one
            </option>
            {sectors.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Budget <span className="optional">(optional)</span>
          <input name="budget" placeholder="e.g. Rp 50–100 million" />
        </label>
        <label className="full">
          What do you need?
          <textarea
            name="needs"
            required
            rows={5}
            placeholder="How does your team handle stock, orders, or bookings today? What goes wrong?"
          />
        </label>
        <div className="full form-foot">
          <button type="submit" className="btn btn-ink">
            Send on WhatsApp
          </button>
          <p className="form-hint">
            Opens WhatsApp with your message filled in. Nothing is sent until you press send there.
          </p>
        </div>
      </div>
    </form>
  );
}
