import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Referenties",
  description:
    "Opdrachtgevers van Amerongen Schilderwerken, waaronder Prowonen, gemeenten, zorg en onderwijs. Borculo.",
};

export default function ReferentiesPage() {
  return (
    <>
      <PageIntro
        title="Referenties en opdrachtgevers"
        lede="Een kort overzicht van opdrachtgevers waarvoor wij schilderwerk en vastgoedonderhoud uitvoeren."
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="referenties">
        <article id="prowonen" className="border-t-2 border-marine bg-white px-5 py-6">
          <p className="inline-flex items-center gap-2 border border-marine px-2 py-1 font-mono text-[12px]">
            <span className="font-semibold">RGS</span>
            Resultaatgericht Samenwerken
          </p>
          <h2 className="mt-4 text-2xl">Prowonen</h2>
          <p className="mt-3">
            Woningcorporatie Prowonen, die woningen verhuurt in de Achterhoek, heeft eind november de
            intentieverklaring met drie onderhoudsbedrijven getekend. Het schilderwerk van het vastgoed wordt
            de komende jaren uitgevoerd op basis van Resultaatgericht Samenwerken.
          </p>
          <p className="mt-3 text-loodgrijs">
            Na een selectieproces zijn Van Amerongen schilderwerken, Reukers schilders en Gebr. van der Geest
            schilder- en vastgoedonderhoud geselecteerd. Op de foto staan dhr. J. Stoel, W. Linthorst, Manfred
            Reukers, Dick van der Geest en Walter Amerongen.
          </p>
          <Link href="/zakelijk#prowonen" className="mt-4 inline-flex min-h-11 items-center underline">
            De foto en het zakelijke verhaal
          </Link>
        </article>
        <ul className="mt-8 grid gap-px border border-haarlijn bg-haarlijn sm:grid-cols-2">
          {content.clients.map((name) => (
            <li key={name} className="bg-white px-4 py-3">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
