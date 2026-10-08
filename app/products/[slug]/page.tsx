import Link from "next/link";
import { notFound } from "next/navigation";
import { AisleSign, Arrow, CtaBand, StatusTag } from "../../components";
import { cases, products } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p && { title: p.name, description: p.tagline, alternates: { canonical: `/products/${p.slug}/` } };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const proof = cases.find((c) => c.product === p.slug);
  const ctaIsMail = p.cta.href.startsWith("mailto:");

  return (
    <>
      <AisleSign code={p.code.split("-")[0]} title={p.name} lead={p.tagline} />

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Sound familiar?</h2>
            <p className="muted">{p.forWho}</p>
            <div className="product-status">
              <StatusTag status={p.status} />
            </div>
          </div>
          <ul className="checklist">
            {p.problems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-stock">
        <div className="wrap">
          <div className="section-head">
            <h2>{p.status === "coming-soon" ? "How it will work" : "What's in the system"}</h2>
          </div>
          <div className="module-grid">
            {p.groups.map((g) => (
              <article key={g.title} className={g.status ? "label ghost" : "label"}>
                <div className="label-row label-head">
                  <span>{g.title}</span>
                  {g.status && <StatusTag status={g.status} />}
                </div>
                <div className="label-body">
                  {g.note && <p>{g.note}</p>}
                  {g.title === "How it works" ? (
                    <ol className="steps-list">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="chips">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="stack-line">
            <span>Built with</span>
            <ul className="shelf shelf-sm">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {proof && (
        <section className="section">
          <div className="wrap split">
            <h2>In use today</h2>
            <div>
              <p className="lead">
                <strong>{proof.client}.</strong> {proof.outcome}
              </p>
              <Link href={`/case-studies/#${proof.code.toLowerCase()}`} className="text-link">
                Read the case study <Arrow />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={ctaIsMail ? "Want to try Ticko first?" : `See the ${p.name.toLowerCase()} working.`}
        body={
          ctaIsMail
            ? "Join the waitlist and we'll email you when the beta opens. No newsletter, just the one message."
            : "We'll walk you through the system with sample data and talk about what your business would need changed."
        }
        label={p.cta.label}
        href={p.cta.href}
      />
    </>
  );
}
