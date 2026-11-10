import Link from "next/link";
import Image from "next/image";
import { content, photos } from "@/content";
import Jaarschijf from "@/components/Jaarschijf";
import PhotoFrame from "@/components/PhotoFrame";
import { CycleSheet } from "@/components/PlanBits";
import { BelButton, MailLink, OfferteButton, PhoneLink } from "@/components/Actions";

const diensten = [
  {
    href: "/schilderwerk",
    title: "Schilderwerk",
    text: "Binnen en buiten, inclusief verfspuiten. Binnenschilderwerk is net zo belangrijk als buitenschilderwerk.",
  },
  {
    href: "/houtrot",
    title: "Houtrotrenovatie",
    text: "Wat goed in de verf zit, rot niet. Wij informeren u vrijblijvend naar de mogelijkheden.",
  },
  {
    href: "/stucwerk",
    title: "Stucwerk",
    text: "Afwerklaag en sausklaar maken van wanden en plafonds, ook Spachtelputz en buitenmuren.",
  },
  {
    href: "/glaszetten",
    title: "Glaszetten",
    text: "Nieuw glas, glasschade en isolatie-, zonwerend- of veiligheidsglas. Leverancier van BENGglas.",
  },
  {
    href: "/gevelreiniging",
    title: "Gevelreiniging",
    text: "Een dof of donker geworden gevel leveren wij weer schoon en opgeknapt op.",
  },
  {
    href: "/winterschilder",
    title: "Winterschilder",
    text: "Voor buiten- en binnenschilderwerk aan uw woning of appartement. Vrijblijvende afspraak of offerte.",
  },
  {
    href: "/onderhoudsplan",
    title: "Onderhoudsplan / MJOP",
    text: "Volledige schilderbeurten, afgewisseld met preventieve inspectie en bijwerkbeurten.",
  },
];

const strip = [
  photos.korenmolen,
  photos.schilderDeur,
  photos.luiken,
  photos.dakkapel,
  photos.bedrijfsgebouw,
  photos.villa,
  photos.gevel,
  photos.winter,
];

export default function Home() {
  return (
    <>
      <section data-section="hero" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:py-14">
          <div>
            <p className="text-base text-loodgrijs">{content.company.tagline}</p>
            <h1 className="mt-3 text-4xl text-marine md:text-5xl">
              Planmatig onderhoud van vastgoed — en van uw woning — vanuit Borculo.
            </h1>
            <p className="mt-5 text-loodgrijs">
              Als middelgroot, full-service schildersbedrijf zijn wij gespecialiseerd in renovatie en
              totaalonderhoud van vastgoed. Voor particulieren, vastgoedbeheerders, zorginstellingen,
              woningbouwverenigingen en overheidsgebouwen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BelButton />
              <OfferteButton tone="marine" label="Vrijblijvende offerte" />
            </div>
          </div>
          <PhotoFrame photo={photos.korenmolen} sizes="(max-width: 768px) 100vw, 560px" preload />
        </div>
      </section>

      <section data-section="gevelband" className="bg-white pb-10">
        <div className="mx-auto max-w-6xl px-5">
          <PhotoFrame photo={photos.herenhuis} sizes="(max-width: 1152px) 100vw, 1152px" />
        </div>
      </section>

      <section data-section="jaarschijf" className="border-y border-haarlijn bg-planpapier">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <h2 className="plan-rule max-w-3xl text-3xl md:text-4xl">De jaarschijf van een meerjarenplan</h2>
          <p className="mt-4 max-w-3xl">
            Amerongen Schilderwerken verzorgt schilderwerk in combinatie met meerjarige
            onderhouds-planningen (MJOP). Het schema bestaat uit volledige schilderbeurten, afgewisseld
            met preventieve inspectie en/of bijwerkbeurten.
          </p>
          <p className="mt-3 max-w-3xl text-loodgrijs">
            In de formule van GlansGarant, waarvan wij exclusief partner zijn: vanaf jaar 1 staat de woning
            in de verf, elk jaar volgt controle en onderhoud, en na vijf of zes jaar een complete
            herschilderbeurt.
          </p>
          <div className="mt-8 border border-haarlijn bg-white px-2 py-4 sm:px-4">
            <Jaarschijf variant="band" />
          </div>
          <p className="mt-3 font-mono text-[12px] text-loodgrijs">
            Rood: in de verf of herschilderbeurt. Marine: controle, inspectie of bijwerken.
          </p>
          <div className="mt-8 bg-white">
            <CycleSheet />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/onderhoudsplan" className="btn btn-marine">
              Onderhoudsplan
            </Link>
            <Link href="/zakelijk" className="btn btn-lijn">
              Zakelijk en corporaties
            </Link>
          </div>
        </div>
      </section>

      <section data-section="twee-banen" className="bg-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <article className="bg-marine px-5 py-12 text-white md:py-16 md:pr-10">
            <h2 className="border-t-2 border-white pt-3 text-3xl">Vastgoed en corporaties</h2>
            <p className="mt-4">
              Meerjarig onderhoud voor nieuwbouw, utiliteitsbouw, zorgobjecten, VvE-objecten en
              woningbouwverenigingen. Wij stellen een meerjarenplan op en voeren mutatiewerk,
              glasschadeherstel, brand- en waterschadeherstel, calamiteitenonderhoud en service-onderhoud uit.
            </p>
            <ul className="mt-4 border-t border-white/25">
              {content.zakelijkTaken.map((item) => (
                <li key={item} className="border-b border-white/25 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4" id="prowonen-home">
              Woningcorporatie Prowonen, die woningen verhuurt in de Achterhoek, heeft eind november de
              intentieverklaring getekend met drie onderhoudsbedrijven. Het schilderwerk van het vastgoed
              wordt de komende jaren uitgevoerd op basis van Resultaatgericht Samenwerken. Amerongen
              Schilderwerken is één van deze drie, samen met Reukers schilders en Gebr. van der Geest.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 border border-white px-2 py-1 font-mono text-[12px] tracking-wide">
              <span className="font-semibold">RGS</span>
              Resultaatgericht Samenwerken
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/zakelijk" className="btn btn-rood">
                Naar zakelijk
              </Link>
              <BelButton tone="lijn-licht" />
            </div>
          </article>
          <article className="flex flex-col border-t border-haarlijn bg-planpapier px-5 py-12 md:self-start md:border-t-0 md:border-l md:py-16 md:pl-10">
            <h2 className="plan-rule text-3xl">Particulieren</h2>
            <div className="mt-5">
              <PhotoFrame photo={photos.kozijnDetail} sizes="(max-width: 768px) 100vw, 520px" />
            </div>
            <p className="mt-4">
              Renovatie en totaalonderhoud van woningen, bijgebouwen en garages. Schilderwerk binnen en
              buiten, houtrotrenovatie, stucwerk, glaszetten, gevelreiniging en de winterschilder.
            </p>
            <p className="mt-4">
              In Borculo, Lochem, Ruurlo en Vorden werken wij als exclusief partner van GlansGarant
              Berkelland-Lochem B.V. aan meerjarenonderhoud tegen een vast bedrag per maand.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/particulier" className="btn btn-marine">
                Naar particulier
              </Link>
              <OfferteButton />
            </div>
          </article>
        </div>
      </section>

      <section data-section="feiten" className="border-y border-haarlijn bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-base">
            {content.contact.street}, {content.contact.city}
            <span className="px-2 text-haarlijn">·</span>
            {content.contact.hoursShort}
            <span className="px-2 text-haarlijn">·</span>
            KvK {content.contact.kvk}
            <span className="px-2 text-haarlijn">·</span>
            VCA*
            <span className="px-2 text-haarlijn">·</span>
            OnderhoudNL
          </p>
          <div className="flex items-center gap-4">
            <Image src="/img/badges/vca.png" alt="VCA* gecertificeerd" width={120} height={120} unoptimized style={{ width: "auto", height: "48px" }} />
            <Image src="/img/badges/onderhoud-nl-garantie.png" alt="Onderhoud NL Garantie" width={120} height={130} unoptimized style={{ width: "auto", height: "48px" }} />
          </div>
        </div>
      </section>

      <section data-section="diensten" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="plan-rule text-3xl md:text-4xl">Werkzaamheden</h2>
        <p className="mt-4 max-w-3xl text-loodgrijs">
          Elke regel is een route: schilderwerk, houtrot, stucwerk, glas, gevel, de winterschilder en het
          meerjarenplan.
        </p>
        <ol className="mt-8 divide-y divide-haarlijn border-y border-haarlijn">
          {diensten.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                <span aria-hidden className={`mt-3 h-2 w-7 ${index === 0 || index === diensten.length - 1 ? "bg-planrood" : "bg-marine"}`} />
                <span>
                  <span className="block font-display text-2xl font-semibold">{item.title}</span>
                  <span className="mt-1 block text-loodgrijs">{item.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section data-section="projecten" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="plan-rule text-3xl md:text-4xl">Projecten</h2>
            <Link href="/projecten" className="btn btn-lijn">
              Alle projecten
            </Link>
          </div>
        </div>
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-auto md:grid md:max-w-6xl md:grid-cols-4 md:overflow-visible">
          {strip.map((photo) => (
            <Link key={photo.src} href="/projecten" className="w-[84%] shrink-0 snap-start sm:w-[46%] md:w-auto">
              <PhotoFrame photo={photo} sizes="(max-width: 768px) 84vw, 25vw" />
            </Link>
          ))}
        </div>
      </section>

      <section data-section="waarom" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="plan-rule text-3xl md:text-4xl">Amerongen Schilderwerken staat voor</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3 className="border-t-2 border-marine pt-3 text-2xl">{pillar.title}</h3>
              <p className="mt-3 text-loodgrijs">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-section="over-ons" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-[280px_1fr]">
          <PhotoFrame photo={photos.schilderKozijn} sizes="303px" className="mx-auto" />
          <div>
            <h2 className="plan-rule text-3xl">Een schildersbedrijf met een lange historie</h2>
            <p className="mt-4">
              Amerongen Schilderwerken is een schildersbedrijf met een lange historie en hart voor haar
              klanten. Door vakkundige medewerkers en het plezier waarmee wij het vak uitoefenen, bent u
              verzekerd van kwalitatief goed werk.
            </p>
            <p className="mt-3 text-loodgrijs">
              Kenmerkend is de persoonlijke benadering. Wij nemen de tijd voor een advies op maat en een zo
              helder mogelijk uitgewerkte offerte, zodat u weet waar u aan toe bent.
            </p>
            <p className="mt-3 text-loodgrijs">
              Enkele malen mochten wij een Klantenvertellen.nl-award in ontvangst nemen, waaronder de award
              van 2017. Die waardering betekent veel voor het hele team.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/img/badges/vca.png" alt="VCA* gecertificeerd" width={120} height={120} unoptimized style={{ width: "auto", height: "64px" }} />
              <Image src="/img/badges/onderhoud-nl-garantie.png" alt="Onderhoud NL Garantie" width={120} height={130} unoptimized style={{ width: "auto", height: "64px" }} />
            </div>
            <Link href="/over-ons" className="btn btn-lijn mt-6">
              Over ons
            </Link>
          </div>
        </div>
      </section>

      <section data-section="referenties" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="plan-rule text-3xl">Opdrachtgevers</h2>
        <p className="mt-4 max-w-3xl">
          <span className="mr-2 inline-flex items-center gap-2 border border-marine px-2 py-1 align-middle font-mono text-[12px]">
            <span className="font-semibold">RGS</span>
            Resultaatgericht Samenwerken
          </span>
          Prowonen verhuurt in de Achterhoek. Met Reukers schilders en Gebr. van der Geest voeren wij het
          schilderwerk van hun vastgoed de komende jaren uit op basis van Resultaatgericht Samenwerken.
        </p>
        <ul className="mt-6 grid gap-px border border-haarlijn bg-haarlijn sm:grid-cols-2 lg:grid-cols-3">
          {content.clients.map((name) => (
            <li key={name} className={`bg-planpapier px-3 py-2 ${name === "Prowonen" ? "font-semibold text-marine" : "text-loodgrijs"}`}>
              {name}
            </li>
          ))}
        </ul>
        <Link href="/referenties" className="btn btn-lijn mt-6">
          Alle referenties
        </Link>
      </section>

      <section data-section="contact" className="bg-marine text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="border-t-2 border-white pt-3 text-3xl">Contact</h2>
            <address className="mt-4 not-italic leading-relaxed">
              {content.company.legalStyle}
              <br />
              {content.contact.street}
              <br />
              {content.contact.postalCode} {content.contact.city}
            </address>
            <p className="mt-4">
              <PhoneLink className="op-donker text-white underline decoration-white/40 underline-offset-4" />
              <br />
              <MailLink className="op-donker text-white underline decoration-white/40 underline-offset-4" />
            </p>
            <p className="mt-3">{content.contact.hours}</p>
          </div>
          <div className="flex flex-col items-start gap-3 md:pt-2">
            <a href={content.contact.mapsHref} className="op-donker text-white underline decoration-white/40 underline-offset-4">
              {content.contact.mapsLabel}
            </a>
            <a href={content.contact.facebook} className="op-donker text-white underline decoration-white/40 underline-offset-4">
              {content.contact.facebookLabel}
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <BelButton tone="rood" />
              <OfferteButton tone="lijn-licht" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
