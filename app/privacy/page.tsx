import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { MailLink, PhoneLink } from "@/components/Actions";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van dit concept voor Amerongen Schilderwerken in Borculo.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Privacy"
        lede="Kort en eerlijk: welke gegevens hier langskomen, en hoe Amerongen Schilderwerken met klantgegevens omgaat."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-12" data-section="privacy">
        <p>
          Dit is een conceptwebsite, gemaakt door Sleads als voorstel voor {content.company.legalStyle},{" "}
          {content.contact.street}, {content.contact.postalCode} {content.contact.city}, KvK{" "}
          {content.contact.kvk}. Het is geen officiële site van het bedrijf. Het offerteformulier verstuurt
          niets zelf: het opent uw mailprogramma met een bericht aan <MailLink />.
        </p>
        <h2 className="plan-rule pt-4 text-2xl">Concept en meting</h2>
        <p>
          Op deze conceptsite staat alleen een cookieloos bezoekersteller van Sleads. Die plaatst geen
          marketingcookies en bewaart geen naam of adres. Verdere analytics of advertentiecookies gebruiken
          wij hier niet.
        </p>
        <h2 className="plan-rule pt-4 text-2xl">Als u klant bent</h2>
        <p>
          Amerongen Schilderwerken beschreef in de eigen privacyverklaring (versie V-3, 30 april 2018) hoe
          klantgegevens worden bewaard. Voor het uitvoeren van werk en het sturen van facturen gaat het om
          naam, adres, telefoon, e-mail, bankrekening en, waar van toepassing, VvE- of bedrijfsnaam. Die
          gegevens staan op eigen servers.
        </p>
        <p>
          Klanten en voormalige klanten: gegevens worden maximaal zeven kalenderjaren bewaard na het laatste
          contact, vanwege de wettelijke plicht richting de staat en de Belastingdienst. Gegevens van personen
          die geen klant of leverancier zijn, worden binnen 30 dagen uit de digitale en schriftelijke systemen
          verwijderd.
        </p>
        <p>
          U kunt een verzoek tot inzage, correctie of verwijdering sturen naar <MailLink />. Vragen over deze
          conceptpagina kunt u ook daar kwijt, of telefonisch via <PhoneLink />.
        </p>
      </div>
    </>
  );
}
