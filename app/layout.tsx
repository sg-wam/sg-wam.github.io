import type { Metadata } from "next";
import "./globals.css";

const description =
  "SG-WAM learns geometry-aware action-conditioned dynamics directly in policy space, reaching 98.5% on LIBERO and 73% on LIBERO-Plus.";
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io/sg-wam"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "SG-WAM — Self-Guided World Modeling",
  description,
  openGraph: {
    title: "SG-WAM — Model the Future Where Actions Are Made",
    description,
    url: siteUrl,
    siteName: "SG-WAM",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1672,
        height: 941,
        alt: "SG-WAM: Self-Guided World Modeling in Geometry-Aware Policy Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SG-WAM — Model the Future Where Actions Are Made",
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
