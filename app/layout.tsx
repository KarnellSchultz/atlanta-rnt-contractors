import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Atlanta R&T Contractors",
  description: "Atlanta R&T Contractors is a full-service contracting company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
