import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import PlanList from "@/components/PlanList";
import { Further, SlotBand } from "@/components/PlanBits";
import { photos } from "@/content";

export const metadata: Metadata = {
  title: "Winterschilder",
  description:
    "De winterschilder van Amerongen Schilderwerken: buiten- en binnenschilderwerk voor woning of appartement. Bel 0545-273824.",
};

const vragen = [
  "Onderhoudsschilderwerk aan uw woning",
  "Onderhoudsschilderwerk aan uw appartement",
  "Buitenschilderwerk én binnenschilderwerk",
  "Een vrijblijvende afspraak",
  "Een geheel vrijblijvende offerte",
];

export default function WinterschilderPage() {
  return (
    <>
      <PageIntro
        title="De winterschilder"
        lede="Voor al uw buiten- en binnenschilderwerk. Heeft u onderhoudsschilderwerk voor uw woning of appartement?"
      />
      <div className="mx-auto max-w-6xl px-5 py-12" data-section="winterschilder">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p>
              Bel ons voor een vrijblijvende afspraak, of vraag een geheel vrijblijvende offerte aan. Kan uw
              huis een opknap- of bijwerkbeurt gebruiken, dan staat Amerongen Schilderwerken voor u klaar.
            </p>
            <h2 className="plan-rule pt-4 text-2xl">Buiten én binnen</h2>
            <p>
              Binnenschilderwerk is net zo belangrijk als buitenschilderwerk. Vocht in huis wil naar buiten,
              daar is de luchtvochtigheid meestal lager. Wanneer kozijnen aan de binnenzijde niet goed in de
              verf staan, of de naden zijn slecht afgedicht, kan dat vocht via de kozijnen naar buiten — ook
              als de buitenzijde er prima uitziet.
            </p>
            <p>
              De winterschilder pakt daarom het onderhoud van de woning als geheel: de kant die het weer ziet,
              en de kant die het vocht in huis tegenhoudt.{" "}
              <Link href="/schilderwerk" className="underline">
                Meer over schilderwerk binnen en buiten
              </Link>
              .
            </p>
            <h2 className="plan-rule pt-4 text-2xl">Waar u ons voor belt</h2>
            <PlanList items={vragen} />
          </div>
          <div className="space-y-4">
            <PhotoFrame photo={photos.winter} sizes="(max-width: 1024px) 100vw, 420px" />
            <PhotoFrame photo={photos.winterGevel} sizes="(max-width: 1024px) 100vw, 468px" />
            <PhotoFrame photo={photos.dakkapel} sizes="(max-width: 1024px) 100vw, 480px" />
          </div>
        </div>
        <Further
          links={[
            { href: "/schilderwerk", label: "Schilderwerk binnen en buiten" },
            { href: "/houtrot", label: "Houtrotrenovatie" },
            { href: "/onderhoudsplan", label: "Meerjarenplan in plaats van een losse beurt" },
            { href: "/particulier", label: "Alles voor de woning" },
          ]}
        />
      </div>
      <SlotBand title="Een afspraak of een offerte" />
    </>
  );
}
