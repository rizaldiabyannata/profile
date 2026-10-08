import { AisleSign, CtaBand } from "../components";
import { site, values } from "@/lib/content";

export const metadata = {
  title: "About",
  description: "ATO - A Technology Organization: a software house in Mataram, West Nusa Tenggara.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <AisleSign
        code="F"
        title="About ATO"
        lead={`${site.legalName}. A small engineering team in Mataram, building software for businesses around us.`}
      />
      <section className="section">
        <div className="wrap split">
          <h2>Why we exist</h2>
          <div className="prose">
            <p>
              Most businesses in Lombok run on WhatsApp, notebooks, and spreadsheets. It works until it doesn&apos;t:
              a missing stock count, a booking lost between staff, a payment nobody can trace.
            </p>
            <p>
              Local agencies mostly build websites. We build the system behind the counter: the one that knows
              what&apos;s in the warehouse, who owes what, and which car goes where tomorrow.
            </p>
            <p>
              We started with a distributor and a tour operator close to home. Both systems are in use today, and the
              same engineering goes into every project we take on.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-stock">
        <div className="wrap">
          <div className="section-head">
            <h2>How we hold ourselves</h2>
          </div>
          <div className="service-grid">
            {values.map((v) => (
              <article key={v.title} className="label">
                <div className="label-body">
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Come and meet us." body={`We're in ${site.city}. Message us and we'll set a time, at your place or ours.`} label="Get in touch" />
    </>
  );
}
