import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doravraham.dev"),
  title: {
    default: "doravraham",
    template: "%s · doravraham",
  },
  description:
    "Dor Avraham — Computer Science Graduate | Full-Stack Developer. Passionate about problem-solving, algorithms, and building modern web applications.",
  openGraph: {
    title: "doravraham",
    description:
      "Dor Avraham — Computer Science Graduate | Full-Stack Developer. Passionate about problem-solving, algorithms, and building modern web applications.",
    url: "/",
    siteName: "doravraham",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dor Avraham",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "doravraham",
    description:
      "Dor Avraham — Computer Science Graduate | Full-Stack Developer. Passionate about problem-solving, algorithms, and building modern web applications.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dor Avraham",
    url: "https://doravraham.dev/",
    image: "https://doravraham.dev/opengraph-image",
    sameAs: [
      "https://github.com/dorav32",
      "https://www.linkedin.com/in/dor-avraham-sd",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "doravraham",
    url: "https://doravraham.dev/",
    publisher: {
      "@type": "Person",
      name: "Dor Avraham",
    },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, personJsonLd]) }}
        />
        <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
          <Nav />
          <main className="pb-16">{children}</main>
          <Footer />
          <ChatWidget />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
