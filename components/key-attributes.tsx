/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/698geOnJ6ki
 */

import { JSX, SVGProps } from "react";

export function KeyAttributes() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AwardIcon className="h-12 w-12 text-gray-900" />
          <h3 className="text-2xl font-bold">Professionalism</h3>
          <p className="max-w-[600px] text-gray-500 md:text-lg ">
            Our company is committed to maintaining the highest level of professionalism. We are
            certified by industry-leading organizations and have received numerous awards for our
            services.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <BoxIcon className="h-12 w-12 text-gray-900" />
          <h3 className="text-2xl font-bold">Quality Workmanship</h3>
          <p className="max-w-[600px] text-gray-500 md:text-lg ">
            We take pride in delivering high-quality workmanship. Our portfolio showcases a range of
            projects, each reflecting our attention to detail and craftsmanship.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 text-center">
          <HeartIcon className="h-12 w-12 text-gray-900" />
          <h3 className="text-2xl font-bold">Customer Satisfaction</h3>
          <p className="max-w-[600px] text-gray-500 md:text-lg ">
            {`We strive for 100% customer satisfaction. 
            Discover firsthand the experiences shared by our valued customers regarding our exceptional services.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function AwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function BoxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}