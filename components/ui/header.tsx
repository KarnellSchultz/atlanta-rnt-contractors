import { BRAND_NAME, LINK } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { HomeIcon } from "../HomeIcon";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="hidden sm:inline">
          <HomeIcon className="h-6 w-6" />
        </span>
        <span className="hidden sm:inline ml-2 text-sm sm:text-lg font-semibold">
          {BRAND_NAME.LONG}
        </span>
        <span className="inline sm:hidden ml-2 text-sm sm:text-lg font-semibold">
          {BRAND_NAME.SHORT}
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-8"
          href={LINK.ourWork}
        >
          Our Work
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-8" href={LINK.about}>
          About Us
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-8"
          href={LINK.contact}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};
