/**
 * Amerongen Schilderwerken — alleen geverifieerde feiten (amerongenborculo.nl, 10 nov 2026).
 */
const phoneDisplay = "0545-273824";
const phoneHref = "tel:+31545273824";
const email = "info@amerongenborculo.nl";

export const content = {
  slug: "amerongen-demo",

  company: {
    name: "Amerongen Schilderwerken",
    shortName: "Amerongen",
    legalStyle: "Amerongen Schilderwerken BV",
    tagline: "Specialisten in planmatig- en vastgoedonderhoud",
    description:
      "Middelgroot, full-service schildersbedrijf in Borculo, gespecialiseerd in renovatie en totaalonderhoud van vastgoed — voor woningcorporaties, VvE’s, zorg en particulieren. Meerjarige onderhouds-planningen (MJOP) vanuit Parallelweg 15.",
    logo: "/img/logo/logo.png",
    logoWidth: 615,
    logoHeight: 235,
    city: "Borculo",
    region: "Borculo, Lochem, Ruurlo, Vorden en de Achterhoek",
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
    { label: "Diensten", href: "/diensten" },
    { label: "Onderhoudsplan", href: "/onderhoudsplan" },
    { label: "Zakelijk", href: "/zakelijk" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
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
    hours: "Maandag t/m vrijdag 08:00 – 18:00 uur",
    kvk: "08038052",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Parallelweg+15,+7271+VB+Borculo",
    mapsLabel: "Parallelweg 15 op de kaart",
    facebook: "https://www.facebook.com/Amerongen-Schilderwerken",
  },

  footer: {
    kvk: "KvK 08038052",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/Amerongen-Schilderwerken" },
    ],
  },
};

export type Content = typeof content;
