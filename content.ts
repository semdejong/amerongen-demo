/**
 * Amerongen Schilderwerken — alleen geverifieerde feiten (amerongenborculo.nl, 10 nov 2026).
 * Geen oprichtingsjaar, geen btw-nummer, geen prijzen, geen verzonnen adressen.
 */

const phoneDisplay = "0545-273824";
const phoneHref = "tel:+31545273824";
const email = "info@amerongenborculo.nl";

export type YearMark = "herschilder" | "controle" | "inspectie" | "bijwerk";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const content = {
  slug: "amerongen-demo",

  company: {
    name: "Amerongen Schilderwerken",
    shortName: "Amerongen",
    legalStyle: "Amerongen Schilderwerken BV",
    partnershipStyle: "Amerongen Schilderwerken Totaalonderhoud B.V.",
    logoWordmark: "Amerongen schilderwerken Totaalonderhoud",
    tagline: "Specialisten in planmatig- en vastgoedonderhoud",
    description:
      "Middelgroot, full-service schildersbedrijf in Borculo, gespecialiseerd in renovatie en totaalonderhoud van vastgoed — voor woningcorporaties, VvE’s, zorg en particulieren. Meerjarige onderhouds-planningen (MJOP) vanuit Parallelweg 15.",
    logo: "/img/logo/logo.png",
    logoWidth: 615,
    logoHeight: 235,
    city: "Borculo",
    region: "Borculo, Lochem, Ruurlo en Vorden",
  },

  colors: {
    primary: "#092356",
    primaryForeground: "#ffffff",
    accent: "#E83643",
    background: "#F2F4F8",
    foreground: "#092356",
    muted: "#FFFFFF",
    marine: "#092356",
    planrood: "#E83643",
    planroodText: "#B81D2C",
    planpapier: "#F2F4F8",
    loodgrijs: "#5C6475",
    haarlijn: "#C2C4D5",
    wit: "#FFFFFF",
  },

  seo: {
    title: "Amerongen Schilderwerken | Planmatig- en vastgoedonderhoud in Borculo",
    description:
      "Schilderwerk en meerjarig vastgoedonderhoud vanuit Borculo. MJOP voor corporaties en particulieren. Bel 0545-273824.",
    lang: "nl",
  },

  nav: [
    { label: "Onderhoudsplan", href: "/onderhoudsplan" },
    { label: "Zakelijk", href: "/zakelijk" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  serviceNav: [
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Houtrot", href: "/houtrot" },
    { label: "Stucwerk", href: "/stucwerk" },
    { label: "Glaszetten", href: "/glaszetten" },
    { label: "Gevelreiniging", href: "/gevelreiniging" },
    { label: "Winterschilder", href: "/winterschilder" },
  ],

  contact: {
    owner: "Walter Amerongen",
    phoneDisplay,
    phoneHref,
    email,
    emailHref: `mailto:${email}`,
    street: "Parallelweg 15",
    postalCode: "7271 VB",
    city: "Borculo",
    hours: "Maandag t/m vrijdag 08:00–18:00",
    hoursShort: "ma–vr 08:00–18:00",
    kvk: "08038052",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Parallelweg+15,+7271+VB+Borculo",
    mapsLabel: "Parallelweg 15 op de kaart",
    facebook: "https://www.facebook.com/Amerongen-Schilderwerken",
    facebookLabel: "Facebook",
  },

  footer: {
    kvk: "KvK 08038052",
  },

  years: [
    { id: "J1", name: "Jaar 1", note: "Verf", mark: "herschilder" as YearMark },
    { id: "J2", name: "Jaar 2", note: "Controle", mark: "controle" as YearMark },
    { id: "J3", name: "Jaar 3", note: "Inspectie", mark: "inspectie" as YearMark },
    { id: "J4", name: "Jaar 4", note: "Bijwerk", mark: "bijwerk" as YearMark },
    { id: "J5", name: "Jaar 5", note: "Beurt", mark: "herschilder" as YearMark },
    { id: "J6", name: "Jaar 6", note: "Beurt", mark: "herschilder" as YearMark },
  ],

  doelgroepen: [
    "particulieren",
    "nieuwbouw",
    "utiliteitsbouw",
    "zorgobjecten",
    "VvE-objecten",
    "woningbouwverenigingen",
  ],

  zakelijkTaken: [
    "Vastgoedonderhoud",
    "Mutatiewerk",
    "Opstellen meerjarenplan",
    "Glasschadeherstel",
    "Brand- en waterschadeherstel",
    "Calamiteitenonderhoud",
    "Service-onderhoud",
  ],

  pillars: [
    {
      title: "Vakmanschap",
      text: "Ervaren vakkrachten die uw onderhoudsvraag met enthousiasme uitvoeren.",
    },
    {
      title: "Kwaliteit",
      text: "Professionele en betrouwbare werkwijze. Duurzaamheid in het werk, in de keuze van materialen en in de leveranciers.",
    },
    {
      title: "Vertrouwen",
      text: "Een prettige relatie met opdrachtgevers, heldere communicatie en uitstekende voorbereiding, uitvoering en nazorg.",
    },
  ],

  clients: [
    "Prowonen",
    "Mooiland Vitalis",
    "PHB Deventer",
    "Rebo Vastgoed management",
    "Rebo VVE management",
    "Van Rooijen VVE management",
    "Trajectum",
    "Riwis zorg en welzijn",
    "Aldi Groenlo",
    "Bibliotheek oost-Achterhoek",
    "Rentray",
    "Gemeente Berkelland",
    "Carmiggelt bouwbedrijf",
    "Sportaccommodatie ‘t Timpke",
    "Zorggroep Apeldoorn",
    "Kreunen Bouw",
    "Careaz",
    "Pactum Lochem",
    "Legamaster Lochem",
    "OLCT Opleiding & Training Borne",
    "Skylance International Borne",
    "Tactus Verslavingszorg",
    "Zozijn Zorg",
    "Apollo Vredestein",
    "Waarborg Vastgoed",
    "MaxX onderwijs",
    "Bronckhorst Hi-tech",
    "Van de Kolk wonen en slapen",
    "Berkelstreek opleidingen",
    "Brandweer Deventer",
    "Graafschap College",
    "Nawi Borculo",
    "van Wijnen Bouw",
    "Beltman bouwbedrijf",
  ],

  houtrotSignalen: [
    "Blaasvorming onder de verflaag",
    "Barsten in de verflaag",
    "Holtes en indeukingen in de lengterichting van het hout",
    "Bruine of zwarte verkleuring van het ongeverfde hout",
    "Loslaten van delen van het hout",
  ],

  spuitwerk: [
    "Meerkleuren muurverf",
    "Radiatoren",
    "Deuren",
    "Vensters",
    "Keukenkasten",
    "Tuinmeubels",
  ],

  offerteDiensten: [
    "Schilderwerk",
    "Houtrotrenovatie",
    "Stucwerk",
    "Glaszetten",
    "Gevelreiniging",
    "Winterschilder",
    "Meerjaren onderhoudsplan of MJOP",
    "GlansGarant",
    "Mutatiewerk",
    "Anders",
  ],

  opdrachtgevers: [
    "Particulier",
    "VvE",
    "Woningcorporatie of vastgoedbeheerder",
    "Bedrijf of instelling",
    "Anders",
  ],
};

export const photos = {
  korenmolen: {
    src: "/img/projecten/korenmolen-de-ster-geesteren-2017.jpg",
    width: 968,
    height: 672,
    alt: "Schilderwerk aan korenmolen De Ster in Geesteren",
    caption: "PROJECT · KORENMOLEN DE STER · GEESTEREN 2017",
  },
  herenhuis: {
    src: "/img/home/herenhuis-gevel-geel.jpg",
    width: 3674,
    height: 1058,
    alt: "Buitenschilderwerk aan een bakstenen gevel met luiken",
    caption: "PARTICULIER · BUITENSCHILDERWERK",
  },
  luiken: {
    src: "/img/home/woning-luiken-wit.jpg",
    width: 2240,
    height: 886,
    alt: "Buitenschilderwerk aan een woning met zwarte luiken",
    caption: "PARTICULIER · BUITENSCHILDERWERK",
  },
  dakkapel: {
    src: "/img/particulier/particulier-23975.jpg",
    width: 960,
    height: 398,
    alt: "Buitenschilderwerk aan een dakkapel en goot",
    caption: "PARTICULIER · BUITENSCHILDERWERK",
  },
  kozijnDetail: {
    src: "/img/projecten/onderhoud-nl-24167.jpg",
    width: 962,
    height: 344,
    alt: "Buitenschilderwerk aan kozijnen en luiken",
    caption: "PARTICULIER · BUITENSCHILDERWERK",
  },
  villa: {
    src: "/img/zakelijk/zakelijk-24067.jpg",
    width: 962,
    height: 392,
    alt: "Buitenschilderwerk aan een groot bakstenen pand",
    caption: "ZAKELIJK · VASTGOEDONDERHOUD",
  },
  bedrijfsgebouw: {
    src: "/img/zakelijk/zakelijk-24103.jpg",
    width: 1440,
    height: 540,
    alt: "Onderhoud aan een laag bedrijfsgebouw",
    caption: "ZAKELIJK · VASTGOEDONDERHOUD",
  },
  schilderDeur: {
    src: "/img/zakelijk/zakelijk-24038.jpg",
    width: 438,
    height: 238,
    alt: "Schilder aan een buitendeur",
    caption: "ZAKELIJK · SCHILDERWERK",
  },
  gevel: {
    src: "/img/gevelreiniging/gevel-24217.jpg",
    width: 730,
    height: 545,
    alt: "Gevel van een woning",
    caption: "GEVELREINIGING",
  },
  stuc: {
    src: "/img/particulier/particulier-23921.jpg",
    width: 489,
    height: 354,
    alt: "Stucwerk: een afwerklaag op een muur",
    caption: "STUCWERK",
  },
  winter: {
    src: "/img/projecten/winterschilder-24113.jpg",
    width: 419,
    height: 260,
    alt: "Schilder aan een kozijn",
    caption: "WINTERSCHILDER",
  },
  winterGevel: {
    src: "/img/projecten/winterschilder-24114.jpg",
    width: 468,
    height: 260,
    alt: "Buitenschilderwerk aan een woning met luiken",
    caption: "WINTERSCHILDER",
  },
  bengglas: {
    src: "/img/glas/bengglas-24187.jpg",
    width: 1782,
    height: 950,
    alt: "Glasgevel, BENGglas",
    caption: "GLASZETTEN · BENGglas",
  },
  schilderKozijn: {
    src: "/img/over-ons/schilder-kozijn.jpg",
    width: 303,
    height: 303,
    alt: "Schilder van Amerongen Schilderwerken aan een kozijn.",
    caption: "SCHILDERWERK",
  },
  prowonen: {
    src: "/img/projecten/actueel-23913.jpg",
    width: 487,
    height: 342,
    alt: "Ondertekening van de intentieverklaring met Prowonen en drie onderhoudsbedrijven",
    caption: "PROWONEN · INTENTIEVERKLARING",
  },
} satisfies Record<string, GalleryPhoto>;

export type Content = typeof content;
