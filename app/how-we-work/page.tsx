import { AisleSign, CtaBand } from "../components";
import { steps } from "@/lib/content";

export const metadata = {
  title: "How we work",
  description:
    "Discovery, two-week sprints, demos you can steer, release, and maintenance. How ATO Team builds systems with your team.",
  alternates: { canonical: "/how-we-work/" },
};

export default function HowWeWork() {
  return (
    <>
      <AisleSign
        code="E"
        title="How we work"
        lead="Short cycles you can see and steer. You never wait months to find out what you paid for."
      />
      <section className="section">
        <div className="wrap">
          <ol className="flow">
            {steps.map((s) => (
              <li key={s.title} className="label">
                <div className="label-row label-head">
                  <span>{s.title}</span>
                  <span>{s.time}</span>
                </div>
                <p className="label-body">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="note">
            After discovery you get a written scope and estimate. Durations above are typical, not promises; the
            estimate is.
          </p>
        </div>
      </section>
      <CtaBand title="Start with discovery." body="The first conversation is free. Tell us what you want to fix and we'll tell you how we'd approach it." />
    </>
  );
}
