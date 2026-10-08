import Link from "next/link";
import { nav, products, site, statusLabel, waLink, type Product, type Status } from "@/lib/content";

export function Arrow() {
  return (
    <svg className="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h12M10 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4h16v12H9l-5 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="miter"
      />
      <path d="M8 9h8M8 12.5h5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

// Decorative barcode derived from a string, so every label gets its own stable pattern.
export function Barcode({ value }: { value: string }) {
  let x = 0;
  const bars = [...value.repeat(3)].map((ch, i) => {
    const w = (ch.charCodeAt(0) % 3) + 1;
    const bar = <rect key={i} x={x} width={w} height="40" />;
    x += w + ((ch.charCodeAt(0) + i) % 2) + 1;
    return bar;
  });
  return (
    <svg className="barcode" viewBox={`0 0 ${x} 40`} preserveAspectRatio="none" aria-hidden="true">
      {bars}
    </svg>
  );
}

export function StatusTag({ status }: { status: Status }) {
  return <span className={`status status-${status}`}>{statusLabel[status]}</span>;
}

function NavLinks() {
  return (
    <ul>
      {nav.map((n) => (
        <li key={n.href}>
          <Link href={n.href}>
            <span className="rack" aria-hidden="true">
              {n.code}
            </span>
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand" aria-label={`${site.name}, home`}>
          <span className="brand-mark">ATO</span>
          <span className="brand-word">Team</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          <NavLinks />
        </nav>
        <Link href="/contact/" className="btn btn-ink header-cta">
          Free consultation
        </Link>
        <details className="nav-mobile">
          <summary>Menu</summary>
          <nav aria-label="Main mobile">
            <NavLinks />
            <Link href="/contact/" className="btn btn-ink">
              Get a free consultation <Arrow />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">
            <span className="brand-mark">ATO</span> {site.legalName}
          </p>
          <p>
            Software house in {site.city}, {site.region}, {site.country}. Operational systems for distribution,
            tourism, and customer service.
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={waLink()}>WhatsApp</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              {site.city}, {site.region}
            </li>
            <li>
              <a href={site.github}>GitHub</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}/`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="hazard-chip" aria-hidden="true" />
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a className="fab" href={waLink()} aria-label="Chat with ATO Team on WhatsApp">
      <ChatIcon />
      <span className="fab-text">WhatsApp</span>
    </a>
  );
}

// Page hero styled as a hanging aisle sign: the rack letter plus the page title.
export function AisleSign({ code, title, lead }: { code: string; title: string; lead: string }) {
  return (
    <section className="aisle">
      <div className="wrap aisle-row">
        <span className="aisle-code" aria-hidden="true">
          {code}
        </span>
        <div>
          <h1>{title}</h1>
          <p className="aisle-lead">{lead}</p>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Tell us how your business runs today.",
  body = "A free first consultation: we listen, map the process, and tell you honestly whether a system is worth building.",
  label = "Get a free consultation",
  href = "/contact/",
}: {
  title?: string;
  body?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="label cta-label">
          <div className="label-row label-head">
            <span>Next step</span>
            <span>Free · No obligation</span>
          </div>
          <div className="label-body">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="actions">
              {href.startsWith("/") ? (
                <Link href={href} className="btn btn-ink">
                  {label} <Arrow />
                </Link>
              ) : (
                <a href={href} className="btn btn-ink">
                  {label} <Arrow />
                </a>
              )}
              <a href={waLink()} className="btn btn-line">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductRow({ p }: { p: Product }) {
  const ghost = p.status === "coming-soon";
  return (
    <article className={`label product-row lift${ghost ? " ghost" : ""}`}>
      <div className="product-id">
        <span className="code">{p.code}</span>
        <StatusTag status={p.status} />
      </div>
      <div className="product-main">
        <h3>
          <Link href={`/products/${p.slug}/`} className="stretched">
            {p.name}
          </Link>
        </h3>
        <p>{p.short}</p>
        <ul className="chips">
          {p.highlights.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
      <div className="product-go" aria-hidden="true">
        <Arrow />
      </div>
    </article>
  );
}
