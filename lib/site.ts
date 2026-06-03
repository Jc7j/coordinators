// Single source of truth for site-wide identity. Used by metadata, sitemap,
// robots, the OG image, and the page itself.
export const site = {
  name: "Coordinators",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://coordinators-phi.vercel.app",
  description:
    "Coordinators build and operate digital products, and partner with technology teams on the hard parts.",
  email: "hello@coordinators.com",
} as const;
