import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-6xl font-bold text-center pb-4">Atlanta R&T Contractors</h1>
          <Image
            className="rounded-full"
            src="/images/stock-man.jpeg"
            alt="Atlanta R&T Contracting Logo"
            width={300}
            height={300}
          />
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Atlanta R&T Contracting
          </a>
        </div>
      </div>
      <div className="relative text-center flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {`Atlanta R&T Contractors is a full-service contracting company. We specialize in residential
        and commercial roofing, siding, gutters, and painting. We are a family-owned and operated
        business with over 20 years of experience in the industry. Our goal is to provide you with
        the best service possible at an affordable price. We offer free estimates on all of our work
        so that you can make an informed decision about what's right for your home or business. If
        you're looking for quality workmanship at competitive prices, then look no further than
        Atlanta R&T Contractors!`}
      </div>
      <div></div>
    </main>
  );
}
