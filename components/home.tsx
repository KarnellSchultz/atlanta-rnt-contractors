/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HDm1WYF7sx5
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { LINK, TEXT } from "@/lib/constants";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <main className="flex-1">
        <section
          className="bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/k4.JPG)",
          }}
        >
          <div className="h-full flex">
            <div className=" flex flex-col gap-1 text-left mt-52 py-16 px-4 space-y-4 sm:px-20">
              <h1 className=" text-white text-3xl sm:text-4xl px-2 ">What will you build next?</h1>
              <p className="sm:text-xl px-2">
                <span className="bg-amber-500 inline">
                  &nbsp;Elevating Lifestyles in Atlanta through Inspired Design.
                </span>
              </p>
              <p className="sm:text-xl px-2">
                <span className="bg-amber-500 inline">&nbsp;One home at a time.</span>
              </p>
              <Link href={LINK.contact}>
                <Button className="bg-gray-800 text-gray-100 px-6 py-6">{TEXT.GET_A_QUOTE}</Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-slate-50"
          id="services"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                We offer a wide range of home construction and remodeling services. Here are just a
                few of our specialties.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">New Home Construction</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    {`From design to completion, we'll work with you every step of the way to build
                    your dream home.`}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Kitchen & Bath</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    We specialize in kitchen and bath remodels, creating beautiful and functional
                    spaces for your family.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Home Remodeling</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    Looking to give your home a fresh look? Our team can help with a full range of
                    remodeling services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Roofing repair or replacement</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    Elevate your home with our top-notch roofing services, ensuring lasting
                    protection and appealing aesthetics.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="">
              <Link href={LINK.services}>
                <Button className="bg-gray-200 text-gray-900 px-6 py-6 w-full">Our Services</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col justify-center py-12 md:py-24 lg:py-32 ">
          <div className="container space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why remodel?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Remodeling your home offers numerous benefits including increased comfort and
              functionality, enhanced aesthetics, improved energy efficiency, increased home value,
              enhanced livability, and the opportunity for personalization, allowing you to create a
              space that aligns with your needs, style, and preferences while potentially saving on
              energy costs and increasing the market value of your property.
            </p>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-yellow-100">
          <div>400 customers</div>
          <div>100% satisfaction</div>
          <div></div>
        </section>
        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-200"
          id="testimonials"
        >
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Hear from our satisfied customers.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-10 h-10" />
                    <h3 className="text-lg font-bold">John Doe</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    {` "Atlanta Home Construction did an amazing job on our new home. The team was
                    professional and the project was completed on time and on budget."`}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-10 h-10" />
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    {` "We recently had our kitchen remodeled and couldn't be happier with the results.
                    Highly recommend Atlanta Home Construction!"`}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-10 h-10" />
                    <h3 className="text-lg font-bold">Sara Johnson</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 ">
                    {`    "Excellent craftsmanship and attention to detail. Our new bathroom is a dream
                    come true."`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your next project? Get in touch with us today.
              </p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4">
                <label className="text-sm font-medium" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="p-2 rounded border border-gray-300 w-full"
                  id="name"
                  type="text"
                />
              </div>
              <div className="grid gap-4">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 rounded border border-gray-300 w-full"
                  id="email"
                  type="email"
                />
              </div>
              <div className="grid gap-4">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="p-2 rounded border border-gray-300 w-full"
                  id="message"
                  rows={6}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Button className="px-6 py-2 rounded-full font-semibold">Submit</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
