import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./utils/ThemeProvider";
import ThemeToggle from "./utils/ThemeToggle";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata = {
  title: "Agustín Gonzalorena - Desarrollador Backend & Infraestructura",
  description:
    "Portfolio de Agustín Gonzalorena, desarrollador backend con +3 años de experiencia. Java, Spring Boot, microservicios y administración de servidores 24/7.",
  keywords:
    "Agustín Gonzalorena, Agustin Gonzalorena, Desarrollador Backend, Desarrollador de Software, Infraestructura, Servidores, Java, Spring Boot, Kafka, Docker, React, Next.js, Portfolio",
  publisher: "Agustín Gonzalorena",
  metadataBase: new URL("https://agonzalorena.com/"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  authors: [
    {
      name: "Agustín Gonzalorena",
      url: "https://github.com/agonzalorena",
    },
  ],
  alternates: {
    canonical: "https://agonzalorena.com/",
  },
  openGraph: {
    title: "Agustín Gonzalorena - Backend & Infraestructura",
    siteName: "Agustín Gonzalorena",
    description:
      "Desarrollador backend con +3 años de experiencia. Conocimientos prácticos en despliegue, configuración y administración de servidores operativos 24/7.",
    url: "https://agonzalorena.com/",
    locale: "es_AR",
    images: {
      url: "https://agonzalorena.com/og.png",
      width: 800,
      height: 600,
    },
    type: "website",
  },

  // Verificación de Google
  verification: {
    google: "ACJVrDkGDbhDblH4pJk0wo59CqRqUTIkKPaokRfJYFU",
  },

  // Íconos
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/my-favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { url: "/my-favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/my-favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest y configuración de Apple web app
  manifest: "/my-favicon/site.webmanifest",
  appleWebApp: {
    title: "Agustín",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Agustín Gonzalorena",
  alternateName: "Agustin Gonzalorena",
  url: "https://agonzalorena.com/",
  image: "https://agonzalorena.com/og.png",
  jobTitle: "Desarrollador Backend",
  description:
    "Desarrollador backend con +3 años de experiencia, especializado en Java, Spring Boot y arquitecturas de microservicios, con conocimientos en administración de servidores e infraestructura.",
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservicios",
    "Apache Kafka",
    "Docker",
    "PostgreSQL",
    "Administración de servidores",
    "Redes y VPN",
    "React",
    "Next.js",
  ],
  sameAs: [
    "https://github.com/agonzalorena",
    "https://www.linkedin.com/in/agonzalorena/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <ThemeToggle />
          <Analytics />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
