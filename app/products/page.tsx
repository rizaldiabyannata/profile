import { AisleSign, CtaBand, ProductRow } from "../components";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description:
    "ERP for distributors, a tour & travel booking system, and Ticko AI customer service, built by ATO Team in Lombok, NTB.",
  alternates: { canonical: "/products/" },
};

export default function Products() {
  return (
    <>
      <AisleSign
        code="C"
        title="Products"
        lead="Three systems built from real businesses in Lombok. We adapt each one to how your team works."
      />
      <section className="section">
        <div className="wrap stack-list">
          {products.map((p) => (
            <ProductRow key={p.slug} p={p} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
