import { SVGProps } from "react";
import Link from "next/link";
import { Form } from "./contact-form";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";

export function ContactForm() {
  return (
    <Card className="max-w-lg mx-auto p-8 space-y-6">
      <CardHeader className="mb-6">
        <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
        <CardDescription className="text-gray-500">
          Please fill out the form below and we will get back to you as soon as possible.
        </CardDescription>
        <div className="flex py-2 gap-2">
          <Link
            className="flex gap-2 justify-center items-center"
            href="mailto:info@g2sitework.com"
          >
            <MailboxIcon className="w-5 h-5" />
            <span className="text-orange-500">info@atlantarntcontractors.com</span>
          </Link>
        </div>
        <div className="flex py-2 gap-2">
          <Link
            className="flex gap-2 justify-center items-center"
            href={`tel:${process.env.PHONE_NUMBER}`}
          >
            <Phone className="w-5 h-5" />
            <span className="text-orange-500">{process.env.PHONE_NUMBER}</span>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  );
}

function MailboxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

const Phone = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    data-testid="geist-icon"
    fill="none"
    height="24"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
