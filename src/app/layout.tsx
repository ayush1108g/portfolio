import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, projectsSchema } from "@/lib/jsonld";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-gupta-portfolio.netlify.app"),
  title: {
    default: "Ayush Gupta | Software Developer",
    template: "%s | Ayush Gupta",
  },
  description:
    "Portfolio of Ayush Gupta, a software developer and IIT Bhubaneswar graduate building web and mobile products.",
  keywords: [
    "Ayush Gupta",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "IIT Bhubaneswar",
    "Competitive Programmer",
  ],
  authors: [{ name: "Ayush Gupta" }],
  creator: "Ayush Gupta",
  publisher: "Ayush Gupta",
  applicationName: "Ayush Gupta Portfolio",
  category: "technology",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Ayush Gupta | Software Developer Portfolio",
    description:
      "Software developer and IIT Bhubaneswar graduate building practical web and mobile products.",
    url: "https://ayush-gupta-portfolio.netlify.app",
    siteName: "Ayush Gupta Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Gupta | Software Developer",
    description: "Software developer and competitive programmer.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  manifest: "/manifest.json",
  other: { "theme-color": "#0f172a", "color-scheme": "dark" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
