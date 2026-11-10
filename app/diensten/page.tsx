import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderwerk, houtrotrenovatie, stucwerk, glaszetten, gevelreiniging, winterschilder en meerjarenonderhoud vanuit Borculo.",
};

const items = [
  { href: "/schilderwerk", title: "Schilderwerk", text: "Binnen en buiten, en verfspuiten van muurverf, plafondverf en traditionele verven." },
  { href: "/houtrot", title: "Houtrotrenovatie", text: "Tijdig herkennen en herstellen. Wat goed in de verf zit, rot niet." },
  { href: "/stucwerk", title: "Stucwerk", text: "Wanden en plafonds sausklaar, Spachtelputz en stucwerk aan buitenmuren." },
  { href: "/glaszetten", title: "Glaszetten", text: "Nieuw glas, glasschade en isolatie-, zonwerend- of veiligheidsglas. Leverancier van BENGglas." },
  { href: "/gevelreiniging", title: "Gevelreiniging", text: "Een grauw geworden gevel weer schoon en opgeknapt." },
  { href: "/winterschilder", title: "Winterschilder", text: "Buiten- en binnenschilderwerk voor woning of appartement." },
  { href: "/onderhoudsplan", title: "Onderhoudsplan", text: "MJOP, OnderhoudNL en het GlansGarant-meerjarenplan." },
  { href: "/zakelijk", title: "Zakelijk", text: "Corporaties, VvE, zorg, utiliteit, mutatie en schade." },
  { href: "/particulier", title: "Particulier", text: "Woningen, bijgebouwen en garages." },
];

export default function DienstenPage() {
  return (
    <>
      <PageIntro
        title="Diensten"
        lede="Schilderwerk in combinatie met meerjarige onderhouds-planningen, voor vastgoed en voor de woning."
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="diensten-overzicht">
        <ul className="divide-y divide-haarlijn border-y border-haarlijn">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-5">
                <span className="font-display text-2xl font-semibold">{item.title}</span>
                <span className="mt-1 block text-loodgrijs">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
