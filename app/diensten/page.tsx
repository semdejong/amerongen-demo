import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import { SlotBand } from "@/components/PlanBits";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Schilderwerk, houtrotrenovatie, stucwerk, glaszetten, gevelreiniging, winterschilder en meerjarenonderhoud vanuit Borculo.",
};

const werk = [
  {
    href: "/schilderwerk",
    title: "Schilderwerk",
    text: "Binnen en buiten. Vocht zoekt de weg naar buiten; daarom hoort de binnenzijde van kozijnen net zo in de verf als de buitenzijde. Ook verfspuiten van muurverf, plafondverf en traditionele verven.",
  },
  {
    href: "/houtrot",
    title: "Houtrotrenovatie",
    text: "Wat goed in de verf zit, rot niet. Blaasvorming, barsten, holtes, verkleuring en loslatend hout zijn tekens die bij een controle horen.",
  },
  {
    href: "/stucwerk",
    title: "Stucwerk",
    text: "Een afwerklaag die sausklaar is, Spachtelputz, of stuc op een buitenmuur als make-over van huis en tuin.",
  },
  {
    href: "/glaszetten",
    title: "Glaszetten",
    text: "Nieuw glas, glasschade, isolatie-, zonwerend- of veiligheidsglas. Wind- en waterdicht gekit. Kozijnen desgewenst in hetzelfde bezoek. Leverancier van BENGglas.",
  },
  {
    href: "/gevelreiniging",
    title: "Gevelreiniging",
    text: "Een grauw geworden gevel weer schoon en opgeknapt. Het werk vraagt tijd; wij leveren de gevel schoon op.",
  },
  {
    href: "/winterschilder",
    title: "Winterschilder",
    text: "Onderhoudsschilderwerk voor woning of appartement, buiten én binnen, met een vrijblijvende afspraak of offerte.",
  },
];

const plan = [
  {
    href: "/onderhoudsplan",
    title: "Onderhoudsplan",
    text: "Jaar 1 in de verf, elk jaar controle, na vijf of zes jaar een herschilderbeurt. MJOP, OnderhoudNL en GlansGarant.",
  },
  {
    href: "/zakelijk",
    title: "Zakelijk",
    text: "Nieuwbouw, utiliteit, zorg, VvE en woningbouwverenigingen. Mutatie, glasschade, brand- en waterschade, calamiteiten en service-onderhoud.",
  },
  {
    href: "/particulier",
    title: "Particulier",
    text: "Woningen, bijgebouwen en garages. In Borculo, Lochem, Ruurlo en Vorden ook als exclusief GlansGarant-partner.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageIntro
        title="Diensten"
        lede="Schilderwerk in combinatie met meerjarige onderhouds-planningen, voor vastgoed en voor de woning."
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="diensten-overzicht">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h2 className="plan-rule text-2xl">Het werk</h2>
            <ul className="mt-4 divide-y divide-haarlijn border-y border-haarlijn">
              {werk.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-5">
                    <span className="font-display text-2xl font-semibold">{item.title}</span>
                    <span className="mt-1 block text-loodgrijs">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="plan-rule mt-12 text-2xl">Het plan</h2>
            <ul className="mt-4 divide-y divide-haarlijn border-y border-haarlijn">
              {plan.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-5">
                    <span className="font-display text-2xl font-semibold">{item.title}</span>
                    <span className="mt-1 block text-loodgrijs">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 lg:pt-14">
            <PhotoFrame photo={photos.korenmolen} sizes="280px" />
            <PhotoFrame photo={photos.gevel} sizes="280px" />
            <PhotoFrame photo={photos.stuc} sizes="280px" />
          </div>
        </div>
      </div>
      <SlotBand />
    </>
  );
}
