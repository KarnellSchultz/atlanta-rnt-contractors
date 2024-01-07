import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Atlanta R&T Contractors is a full-service contracting company.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={"/"} className="cursor-pointer">
        <h1 className="text-5xl font-bold pb-4 flex flex-col text-left">
          <span>Atlanta R&T</span>
          <span>Contractors</span>
        </h1>
      </Link>

      <div className="max-w-5xl text-center p-6 w-full items-center justify-between">
        <Link href="mailto:info@atlantarntcontractors.com">info@atlantarntcontractors.com</Link>
      </div>
    </main>
  );
}
