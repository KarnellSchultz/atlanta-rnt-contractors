import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import { HomeIcon } from "@/components/HomeIcon";
import { BRAND_NAME, LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Atlanta R&T Contractors",
  description: "Atlanta R&T Contractors is a full-service contracting company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <>
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <span>
                <HomeIcon className="h-6 w-6" />
              </span>
              <span className="ml-2 text-lg font-semibold">{BRAND_NAME}</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Testimonials
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href={LINK.services}
              >
                Services
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href={LINK.contact}
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
        </>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© {BRAND_NAME}. All rights reserved.</p>
          <section>
            <div className="text-lg underline">contact us</div>
            <div className="text-xs text-gray-500">
              <span>Phone:</span>{" "}
              <Link href={`tel:${process.env.BUSINESS_PHONE}`}>{process.env.BUSINESS_PHONE}</Link>
            </div>
            <div className="text-xs text-gray-500">
              <span>Email:</span>
              <Link className="ml-1 underline" href={`mailto:${process.env.BUSINESS_EMAIL}`}>
                {process.env.BUSINESS_EMAIL}
              </Link>
            </div>
          </section>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
          </nav>
        </footer>
      </body>
    </html>
  );
}
