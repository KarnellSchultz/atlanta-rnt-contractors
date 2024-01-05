import { ContactForm } from "@/components/form";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4">
      <h1 className="md:text-6xl text-4xl font-bold pb-4 flex flex-col text-center">
        Reach out to get a free quote
      </h1>
      <p className="text-xl pb-10 text-gray-500 text-center">{`We'll help make your project a success`}</p>
      <ContactForm />
    </main>
  );
}
