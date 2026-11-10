import type { NextConfig } from "next";

const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/index.htm", destination: "/" },
  { source: "/zakelijk.htm", destination: "/zakelijk" },
  { source: "/particulier.htm", destination: "/particulier" },
  { source: "/over ons.htm", destination: "/over-ons" },
  { source: "/over%20ons.htm", destination: "/over-ons" },
  { source: "/contact.htm", destination: "/contact" },
  { source: "/referenties.htm", destination: "/referenties" },
  { source: "/onderhoud_nl.htm", destination: "/onderhoudsplan" },
  { source: "/onderhoudsplan_glansgarant.htm", destination: "/onderhoudsplan" },
  { source: "/gevelreiniging.htm", destination: "/gevelreiniging" },
  { source: "/schilderwerk.htm", destination: "/winterschilder" },
  { source: "/speciale-projecten.htm", destination: "/projecten#monumentaal" },
  { source: "/bengglas.htm", destination: "/glaszetten" },
  { source: "/privacy_verklaring.htm", destination: "/privacy" },
  { source: "/actueel.htm", destination: "/zakelijk#prowonen" },
  { source: "/particulier-schilderwerk.htm", destination: "/particulier" },
  { source: "/zakelijk-schilderwerk.htm", destination: "/zakelijk" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return legacyRedirects.map((item) => ({
      ...item,
      permanent: false,
    }));
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
