# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js only (App Router, TypeScript), static export (`output: 'export'`). No Tailwind, no UI kit, no i18n or
MDX library. Styling in plain CSS. Deploy target: Dokploy on the team VPS (static files).

## Users

Owners of B2B businesses in Lombok/NTB and nearby (Bali, NTT) whose operations still run on WhatsApp,
notebooks, and spreadsheets — not IT people. Main personas:
- Distributor / wholesaler owners: stock, orders, and receivables tracked by hand; salesmen hold too much control.
- Travel agent / vehicle rental owners in Lombok: bookings via WhatsApp, fleet and finance in spreadsheets.
- Businesses with heavy chat volume: CS overwhelmed by repeated questions.
- Partners, recruiters, tender committees judging the team's capacity.

## Product Purpose

Company profile for ATO Team ("ATO - A Technology Organization"), a software house in Mataram, NTB. It explains
in five seconds who ATO is and what it builds, shows real work as anonymous case studies, and turns visitors into
consultation requests (form → WhatsApp). Success: qualified consultation requests from B2B owners.

## Positioning

"A B2B software house from West Nusa Tenggara that builds operational systems, not just websites." A local team
that understands distribution and tourism, engineering to enterprise standards.

## Operating Context

Visitors arrive on mobile over NTB cellular networks, often from a WhatsApp link or local Google search. They
contact businesses through WhatsApp first.

## Capabilities and Constraints

Three product lines, claims limited to what the code proves:
- **ERP for distributors** (Pridata): role-based access (owner, admin, warehouse, invoicing clerk, accountant,
  sales), multi-warehouse stock, orders, invoices, payments, receivables, returns, warehouse transfers, automatic
  monthly reports and exports, resilient integration with an existing ERP. Merchant & salesman mobile app is
  **in development**.
- **Tour & travel system** (Reborn Lombok): public booking website + admin panel — packages, custom trips, fleet,
  vehicle rental, promos, finance/cash-in, blog/CMS, testimonials, FAQ, online payment. Live in production.
- **Ticko** (AI customer service): human handoff enforced in routing before the AI is called, prefers escalating
  to guessing, WhatsApp + Telegram planned. **Coming soon.**

Undecided: legal entity, official logo, domain, WhatsApp number, email, address, founding year, team members
shown. English only in v1; Indonesian (`/id`) follows.

## Brand Commitments

Name "ATO Team" / "ATO - A Technology Organization". Old MIGRAINE logo is not to be used. No official logo yet.

## Evidence on Hand

Two real, shipped/ongoing systems (ERP distribution, tour & travel), described anonymously ("an electronics
distributor in Mataram", "a tour & rental operator in Lombok") until written client permission exists. No
screenshots yet (masked ones pending), no metrics, no testimonials, no client logos — never fabricate them.

## Product Principles

1. Every claim must point to working code; unfinished products are labelled as such.
2. Speak to business owners in business outcomes, then show the engineering as proof.
3. One action everywhere: ask for a consultation.
4. Local and concrete over generic agency talk.

## Accessibility & Inclusion

WCAG 2.1 AA: contrast, keyboard navigation, alt text, form labels. Mobile first, 360–1440px. LCP < 2.5s on 4G.
