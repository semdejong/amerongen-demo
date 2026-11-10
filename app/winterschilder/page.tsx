import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PhotoFrame from "@/components/PhotoFrame";
import { photos } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Winterschilder",
  description:
    "De winterschilder van Amerongen Schilderwerken: buiten- en binnenschilderwerk voor woning of appartement. Bel 0545-273824.",
};

export default function WinterschilderPage() {
  return (
    <>
      <PageIntro
        title="De winterschilder"
        lede="Voor al uw buiten- en binnenschilderwerk."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2" data-section="winterschilder">
        <div className="space-y-4">
          <p>Heeft u onderhoudsschilderwerk voor uw woning of appartement?</p>
          <p>Bel ons voor een vrijblijvende afspraak, of vraag een geheel vrijblijvende offerte aan.</p>
          <p>
            Binnenschilderwerk hoort daarbij. Vocht in huis zoekt een weg naar buiten wanneer kozijnen aan de
            binnenzijde niet goed in de verf staan of naden slecht zijn afgedicht.{" "}
            <Link href="/schilderwerk" className="underline">
              Lees meer over schilderwerk binnen en buiten
            </Link>
            .
          </p>
        </div>
        <div className="space-y-4">
          <PhotoFrame photo={photos.winter} sizes="(max-width: 768px) 100vw, 420px" />
          <PhotoFrame photo={photos.winterGevel} sizes="(max-width: 768px) 100vw, 468px" />
        </div>
      </div>
    </>
  );
}
