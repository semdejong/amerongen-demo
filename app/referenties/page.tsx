import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import { SlotBand } from "@/components/PlanBits";
import { content, photos } from "@/content";

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
        lede="Opdrachtgevers zoals het bedrijf ze noemt: vastgoed en VvE, zorg, onderwijs, bouw, overheid, en de overige namen."
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="referenties">
        <article id="prowonen" className="grid gap-6 border-t-2 border-marine bg-white px-5 py-6 lg:grid-cols-[1fr_280px]">
          <div>
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
          </div>
          <PhotoFrame photo={photos.prowonen} sizes="280px" />
        </article>

        <div className="mt-12 space-y-10">
          {content.clientGroups.map((group) => (
            <section key={group.title}>
              <h2 className="plan-rule text-2xl">{group.title}</h2>
              <ul className="mt-4 grid gap-px border border-haarlijn bg-haarlijn sm:grid-cols-2">
                {group.names.map((name) => (
                  <li key={name} className="bg-white px-4 py-3">
                    {name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <SlotBand title="Ook een opdracht bespreken" />
    </>
  );
}
