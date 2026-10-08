import Link from "next/link";
import { AisleSign, Arrow, CtaBand } from "../components";
import { cases, products } from "@/lib/content";

export const metadata = {
  title: "Case studies",
  description:
    "How ATO Team built an ERP for a distributor in Mataram and a booking system for a tour & rental operator in Lombok.",
  alternates: { canonical: "/case-studies/" },
};

export default function CaseStudies() {
  return (
    <>
      <AisleSign
        code="D"
        title="Case studies"
        lead="Two businesses in Lombok, two systems in use. Names are withheld until our clients agree to be named."
      />
      <section className="section">
        <div className="wrap case-list">
          {cases.map((c) => {
            const p = products.find((x) => x.slug === c.product)!;
            return (
              <article key={c.code} id={c.code.toLowerCase()} className="label case">
                <div className="label-row label-head">
                  <span>{c.code}</span>
                  <span>{p.name.split(":")[0]}</span>
                </div>
                <div className="label-body">
                  <h2>{c.client}</h2>
                  <div className="case-grid">
                    <section>
                      <h3>The problem</h3>
                      <p>{c.challenge}</p>
                    </section>
                    <section>
                      <h3>What we built</h3>
                      <ul className="checklist checklist-tight">
                        {c.solution.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3>Where it stands</h3>
                      <p>{c.outcome}</p>
                    </section>
                  </div>
                </div>
                <div className="label-row case-foot">
                  <ul className="shelf shelf-sm">
                    {c.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <Link href={`/products/${p.slug}/`} className="text-link">
                    About the product <Arrow />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <CtaBand title="Running a business like these?" />
    </>
  );
}
