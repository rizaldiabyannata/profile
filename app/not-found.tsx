import Link from "next/link";
import { AisleSign, Arrow } from "./components";

export default function NotFound() {
  return (
    <>
      <AisleSign code="?" title="Empty shelf" lead="Nothing is stored at this location. It may have moved." />
      <section className="section">
        <div className="wrap">
          <Link href="/" className="btn btn-ink">
            Back to the front <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
