import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const description =
  "SG-WAM learns geometry-aware action-conditioned dynamics directly in policy space, reaching 98.5% on LIBERO and 73% on LIBERO-Plus.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "SG-WAM — Self-Guided World Modeling",
    description,
    openGraph: {
      title: "SG-WAM — Model the Future Where Actions Are Made",
      description,
      url: origin,
      siteName: "SG-WAM",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
