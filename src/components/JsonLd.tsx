import { profile } from "@/data/profile";

export function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://keireki.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.nameEn,
    jobTitle: profile.title,
    description: profile.description,
    url: siteUrl,
    image: `${siteUrl}${profile.image}`,
    sameAs: [profile.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "JP",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS",
      "Azure",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
