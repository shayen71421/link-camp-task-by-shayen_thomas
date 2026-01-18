import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="LINK CAMP 2025 | IEEE LINK" />
        <title>LINK CAMP 2025 - IEEE LINK</title>
        <link rel="icon" type="image/jpeg" href="/images/favicon.jpg"/>
        <meta
          name="description"
          content="LINK CAMP 2025 - A premier event by IEEE LINK on 24th January 2025 in Kochi, Kerala. Join us for technical sessions, networking, and innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ieee-link.org/Link_Camp_2026" />
        <meta property="og:title" content="LINK CAMP 2025 | IEEE LINK" />
        <meta
          property="og:description"
          content="LINK CAMP 2025 - 24th January 2025, Kochi. Join us for technical sessions, networking, and innovation."
        />
        <meta
          property="og:image"
          content="/images/logo.svg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ieee-link.org/linkcamp2025" />
        <meta property="twitter:title" content="LINK CAMP 2025 | IEEE LINK" />
        <meta
          property="twitter:description"
          content="LINK CAMP 2025 - 24th January 2025, Kochi, Kerala. A premier event by IEEE LINK for college students and IEEE members."
        />
        <meta
          property="twitter:image"
          content="/images/logo.svg"
        />
        <meta
          name="keywords"
          content="IEEE LINK, LINK CAMP 2025, IEEE Event, Kochi, Kerala, technology, innovation, networking, students, IEEE members, technical sessions, workshops"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#00629B" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
