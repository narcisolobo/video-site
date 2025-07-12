import { dosis, orbitron } from "@/fonts";
import MenuDrawer from "@/layout/drawer";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

const metadata: Metadata = {
  title: "WOS Can Code: Mission Control",
  description: "Home base for lecture recordings, resources, and more.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WOS Can Code: Mission Control",
    description: "Home base for lecture recordings, resources, and more.",
    url: "https://wos-mission-control.cisocodes.com/",
    siteName: "Mission Control",
    images: [
      {
        url: "https://wos-mission-control.cisocodes.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dosis.variable} ${orbitron.variable} antialiased`}>
        <Navbar />
        <MenuDrawer>
          <main className="flex-1 px-4 pt-20 pb-4 md:container md:mx-auto">
            {children}
          </main>
          <Footer />
        </MenuDrawer>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
