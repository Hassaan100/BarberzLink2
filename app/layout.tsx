import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import SiteMotion from "@/components/SiteMotion";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Barberzlink - Hire Connect Grow",
  description:
    "Barberzlink is the ultimate platform for barbers, salons, and clients to hire, connect, and grow. Discover talented professionals, expand your network, and grow your business with ease. Because apparently the haircut industry also needed digital transformation.",

  keywords: [
    "Barberzlink",
    "barber platform",
    "salon hiring",
    "barber jobs",
    "beauty professionals",
    "salon network",
    "hire barbers",
    "connect salons",
    "grow business",
  ],

  openGraph: {
    title: "Barberzlink - Hire Connect Grow",
    description:
      "Hire top barber professionals, connect with salons, and grow your business with Barberzlink.",
    url: "https://barberzlink.com/",
    siteName: "Barberzlink",
    images: [
      {
        url: "https://barberzlink.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barberzlink - Hire Connect Grow",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Barberzlink - Hire Connect Grow",
    description:
      "Join Barberzlink to hire, connect, and grow in the barber and salon industry.",
    images: ["https://barberzlink.com/og-image.jpg"],
    site: "@barberzlink",
    creator: "@barberzlink",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${montserrat.variable} font-sans antialiased flex flex-col min-h-screen w-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <Toaster position="top-right" richColors />
          <ScrollToTop />

          <Header />

          <main className="grow">
            <SiteMotion>{children}</SiteMotion>
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
