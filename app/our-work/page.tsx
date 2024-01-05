import { Button } from "@/components/ui/button";
import { LINK, TEXT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const IMAGE_GALLERY_DATA = [
  {
    alt: "Project 1",
    src: "/images/k1.JPG",
  },
  {
    alt: "Project 2",
    src: "/images/k2.JPG",
  },
  {
    alt: "Project 3",
    src: "/images/r3.JPG",
  },
  {
    alt: "Project 4",
    src: "/images/r1.JPG",
  },
  {
    alt: "Project 5",
    src: "/images/r2.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br4.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br1.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br2.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br3.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br4.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/br2.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/lr1.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/lr2.JPG",
  },
  {
    alt: "Project 6",
    src: "/images/lr3.JPG",
  },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-4">
        <h2 className="col-span-full text-3xl font-bold mb-6 text-center">
          Our Work
          <p className="text-gray-500 text-lg font-normal">
            {`Here are some of the projects we've worked on recently. We're proud of what we've achieved
          and we're excited to share them with you.`}
          </p>
        </h2>

        {IMAGE_GALLERY_DATA.map((data, index) => {
          return (
            <div className="relative overflow-hidden rounded-lg" key={index}>
              <Image
                alt={data.alt}
                className="aspect-square object-cover w-full"
                height="600"
                src={data.src}
                width="600"
              />
            </div>
          );
        })}
      </div>
      <Link href={LINK.contact}>
        <Button className="bg-gray-800 hover:bg-gray-950 text-gray-100 px-6 py-6">
          {TEXT.CONTACT_US}
        </Button>
      </Link>
    </main>
  );
}
