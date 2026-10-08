import { AisleSign } from "../components";
import { ContactForm } from "./ContactForm";
import { site, waLink } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Ask ATO Team for a free consultation by WhatsApp or email. Based in Mataram, Lombok, NTB.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <AisleSign
        code="G"
        title="Free consultation"
        lead="Tell us how your business runs today. We'll reply on WhatsApp, usually within one working day."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <ContactForm />
          <aside className="label contact-direct">
            <div className="label-row label-head">
              <span>Direct</span>
            </div>
            <dl className="label-body">
              <dt>WhatsApp</dt>
              <dd>
                <a href={waLink()}>Chat with us</a>
              </dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
              <dt>Office</dt>
              <dd>
                {site.city}, {site.region}, {site.country}
              </dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
