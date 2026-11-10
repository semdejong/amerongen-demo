import Link from "next/link";
import { BelButton } from "@/components/Actions";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16" data-section="niet-gevonden">
      <h1 className="plan-rule text-4xl">Pagina niet gevonden</h1>
      <p className="mt-4 text-loodgrijs">Deze route bestaat niet op dit concept. Ga terug naar het begin, of bel ons.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-marine">
          Naar home
        </Link>
        <BelButton tone="lijn" />
      </div>
    </div>
  );
}
