import Image from "next/image";
import { Metadata } from "next/types";

const aboutUsText = `Welcome to Atlanta R&T Contractors, where we believe in the power of family and expertise. As a family-owned business with over a decade of professional experience, we take pride in who we are and what we do. Our unwavering passion and dedication drive us to deliver exceptional results in the field of contracting. With a focus on residential projects, our skilled team tailors top-quality services to meet your specific needs. Join our growing list of satisfied customers and discover the Atlanta R&T Contractors difference, where family values meet contracting excellence.`;

export const metadata: Metadata = {
  title: "About Us - Atlanta R&T Contractors",
  description: "Atlanta R&T Contractors is a full-service contracting company.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4 gap-10">
      <h1 className=" col-span-full md:text-6xl text-4xl font-bold pb-4 flex flex-col text-center">
        About Us
      </h1>
      <section className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4">
        <div>
          <p className="text-gray-500 text-lg font-normal">{aboutUsText}</p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <Image src="/images/FAM.jpeg" alt="A family photo" width={400} height={400} />
        </div>
      </section>
    </main>
  );
}
