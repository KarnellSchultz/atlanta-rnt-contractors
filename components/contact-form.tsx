"use client";

import React from "react";
import { useFormState } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { submitAction } from "./form-actions";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full focus-visible:ring-gray-700 text-white bg-gray-800 hover:bg-gray-950"
      aria-disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};
const initState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
export const Form = () => {
  const [message, formAction] = useFormState(submitAction, initState);

  return (
    <form className="space-y-4" action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          className="w-full focus-visible:ring-amber-500"
          id="name"
          name="name"
          placeholder="First and Last Name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full focus-visible:ring-amber-500"
          id="email"
          name="email"
          placeholder="name@xyz.com"
          required
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          className="w-full focus-visible:ring-amber-500"
          id="phone"
          name="phone"
          placeholder="404-555-5555"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="w-full min-h-[100px] focus-visible:ring-amber-500"
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />
      </div>
      <SubmitButton />
      {message && (
        <div className="text-gray-500">
          <p>{message.message}</p>
        </div>
      )}
      {/* Hp fields */}
      <div className="absolute top-0 left-0 opacity-0 w-0 h-0 -z-10 ">
        <Input id="h-name" name="h-name" type="text" />
      </div>
    </form>
  );
};
