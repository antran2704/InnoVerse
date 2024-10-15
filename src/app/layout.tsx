import type { Metadata } from "next";
import Navbar from "~/components/Navbar";

import "./globals.scss";
import Footer from "~/components/Footer";
import ScrollToTop from "~/components/ScrollToTop";
import { NextUIProviders } from "~/components/Provider/NextUI";
import ChatBox from "~/components/ChatBox";

export const metadata: Metadata = {
  title: "InnoVerse",
  description: "Description about InnoVerse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProviders>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <ChatBox />
          <ScrollToTop />
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
