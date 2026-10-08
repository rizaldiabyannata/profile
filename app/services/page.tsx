import { AisleSign, CtaBand } from "../components";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Custom web, mobile, and backend systems, ERP integration, maintenance & hosting, and digitalisation consulting from a software house in Mataram, Lombok.",
  alternates: { canonical: "/services/" },
};

export default function Services() {
  return (
    <>
      <AisleSign
        code="B"
        title="Services"
        lead="From the first conversation about how your business runs today, to the system that runs it tomorrow, and the years of upkeep after."
      />
      <section className="section">
        <div className="wrap service-grid">
          {services.map((s) => (
            <article key={s.code} className="label">
              <div className="label-row label-head">
                <span>{s.code}</span>
              </div>
              <div className="label-body">
                <h2 className="h3">{s.title}</h2>
                <p>{s.body}</p>
                <ul className="chips">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Not sure which one you need?" body="Most projects start with a conversation. Tell us what slows your team down and we'll suggest where to begin." />
    </>
  );
}
