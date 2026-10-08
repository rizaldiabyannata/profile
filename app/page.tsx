import Link from "next/link";
import { Arrow, Barcode, CtaBand, ProductRow, StatusTag } from "./components";
import { cases, products, site, stack, waLink } from "@/lib/content";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="label hero-label">
            <div className="label-row label-head">
              <span>{site.legalName}</span>
              <span className="hide-sm">
                {site.city}, NTB
              </span>
              <span>LOC A-01</span>
            </div>
            <div className="label-body hero-body">
              <h1>
                Operational systems, <span className="quiet">not just websites.</span>
              </h1>
              <div className="hero-side">
                <p className="hero-lead">
                  A B2B software house from West Nusa Tenggara. We build the systems that run distribution, tourism,
                  and customer service: stock, orders, bookings, fleets, and money.
                </p>
                <div className="actions">
                  <Link href="/contact/" className="btn btn-ink">
                    Get a free consultation <Arrow />
                  </Link>
                  <a href={waLink()} className="btn btn-line">
                    Chat on WhatsApp
                  </a>
                </div>
                <Barcode value="ATO-TEAM-MTR" />
              </div>
            </div>
            <ul className="label-row hero-cells">
              {products.map((p) => (
                <li key={p.slug} className={p.status === "coming-soon" ? "cell ghost-cell" : "cell"}>
                  <Link href={`/products/${p.slug}/`}>
                    <span className="code">{p.code}</span>
                    <strong>{p.name.split(":")[0]}</strong>
                    {p.status === "coming-soon" && <StatusTag status={p.status} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Three systems, already running</h2>
            <p>Each one started as a real business problem in Lombok. Two are in use today; the third is on the bench.</p>
          </div>
          <div className="stack-list">
            {products.map((p) => (
              <ProductRow key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-stock">
        <div className="wrap">
          <div className="section-head">
            <h2>Work we can point to</h2>
            <p>Client names stay private until they say otherwise. The systems are real.</p>
          </div>
          <div className="manifest-grid">
            {cases.map((c) => (
              <article key={c.code} className="label manifest lift">
                <div className="label-row label-head">
                  <span>{c.code}</span>
                  <span>{products.find((p) => p.slug === c.product)?.name.split(":")[0]}</span>
                </div>
                <dl className="label-body">
                  <dt>Client</dt>
                  <dd className="manifest-client">
                    <Link href={`/case-studies/#${c.code.toLowerCase()}`} className="stretched">
                      {c.client}
                    </Link>
                  </dd>
                  <dt>Problem</dt>
                  <dd>{c.challenge}</dd>
                  <dt>Now</dt>
                  <dd>{c.outcome}</dd>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>What it&apos;s built with</h2>
            <p>The same tools enterprise teams use, chosen so your system can be maintained for years.</p>
          </div>
          <ul className="shelf">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="locale">
        <div className="wrap locale-row">
          <span className="aisle-code" aria-hidden="true">
            NTB
          </span>
          <p>
            Based in <strong>Mataram, West Nusa Tenggara.</strong> We work with businesses across Lombok, Bali, and
            NTT, and we&apos;re close enough to sit with your team.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
