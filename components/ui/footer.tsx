import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { BRAND_NAME, LINK, TEXT } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="px-4 m-6 md:px-6">
      <FooterContactForm />
      <FooterDetails />
    </footer>
  );
};

export const FooterContactForm = () => (
  <div className="flex flex-col gap-4 sm:flex-row sm:justify-around py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <section
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-gray-100"
      id="contact"
    >
      <div className="container px-4 md:px-6 flex flex-col">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to start your next project?
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {`Let's build something great together. Get in touch with us today for a free quote.`}
          </p>
          <Link href={LINK.contact}>
            <Button className="bg-gray-800 hover:bg-gray-950 active:border-red-300 text-gray-100 px-6 py-6">
              {TEXT.GET_A_QUOTE}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export const FooterDetails = () => {
  return (
    <section className="border-t grid grid-cols-2">
      <div className="flex gap-4 pt-6">
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
      </div>
      <p className="text-xs text-gray-500 flex items-end justify-end ">© {BRAND_NAME.LONG} 2024</p>
    </section>
  );
};
