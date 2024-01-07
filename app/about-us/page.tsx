import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Us - Atlanta R&T Contractors",
  description: "Atlanta R&T Contractors is a full-service contracting company.",
};

const aboutUsText = `Welcome to Atlanta R&T Contractors, a family-owned business with over a decade of experience. We deliver exceptional results in residential contracting, tailoring top-quality services to meet your needs. Join our satisfied customers and experience the Atlanta R&T Contractors difference.`;

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      <section className="flex flex-col items-center p-4">
        <h1 className=" col-span-full md:text-6xl text-4xl font-bold flex flex-col text-center">
          About Us
        </h1>
        <p className="text-gray-500 text-center text-lg font-normal">{aboutUsText}</p>
      </section>
      <div className="relative overflow-hidden rounded-lg">
        <Image src="/images/FAM.jpeg" alt="A family photo" width={400} height={400} />
      </div>
    </main>
  );
}
