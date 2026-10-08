import type { MetadataRoute } from "next";
import { nav, products, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((n) => n.href), "/contact/", ...products.map((p) => `/products/${p.slug}/`)];
  return paths.map((p) => ({ url: new URL(p, site.url).href }));
}
