import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <>
      {" "}
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-white"
            htmlFor="first-name"
          >
            First Name*
          </label>
          <Input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
            id="first-name"
            type="text"
            placeholder="Type your first name"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-white"
            htmlFor="last-name"
          >
            Last Name*
          </label>
          <Input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
            id="last-name"
            type="text"
            placeholder="Type your last name"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-white"
            htmlFor="email"
          >
            Email*
          </label>
          <Input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="Type your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-white"
            htmlFor="phone"
          >
            Phone
          </label>
          <Input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Type your phone number"
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-white">
            Message*
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
            id="message"
            // placeholder="Type your message"
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Button className="px-4 py-2 font-bold" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
