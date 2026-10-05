"use client";

import Link from "next/link";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "../common/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  footerContactSchema,
  splitFullName,
} from "@/lib/form-schemas/contact";
import { api } from "@/trpc/react";

const Footer = () => {
  const form = useForm<z.infer<typeof footerContactSchema>>({
    resolver: zodResolver(footerContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { mutate, isPending, isSuccess, isError, error, reset } =
    api.contact.contactUs.useMutation({
      onSuccess: () => {
        form.reset();
      },
    });

  function onSubmit(values: z.infer<typeof footerContactSchema>) {
    reset();
    const { firstName, lastName } = splitFullName(values.name);
    mutate({
      firstName,
      lastName,
      email: values.email,
      phone: values.phone,
      message: values.message,
    });
  }

  return (
    <footer className="bg-zinc-50 bg-opacity-90 bg-gradient-to-br text-primary">
      <MaxWidthWrapper>
        <div className="mb-4 grid grid-cols-1 gap-6 p-4 pt-4 md:grid-cols-2 md:gap-4">
          {/* Left section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">GET IN TOUCH:</h3>
            <ul className="text-md space-y-2">
              <li>Email: info@integerinvestments.com</li>
              <li>Phone: +44 7441395334</li>
              <li>Whatsapp: +44 7909050331</li>
              <li>LONDON | NYC</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">CONTACT US:</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel className="text-md">Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            className="w-full rounded-md border border-gray-300 p-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel className="text-md">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-md border border-gray-300 p-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="relative col-span-1">
                        <FormLabel className="text-md">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Include country code"
                            className="w-full rounded-md border border-gray-300 p-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="col-span-1 md:col-span-2">
                        <FormLabel className="text-md">Message *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Message"
                            className="w-full rounded-md border border-gray-300 p-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="col-span-1 flex flex-col items-end justify-end gap-2">
                    <Button
                      type="submit"
                      className="md:3/4 w-full"
                      disabled={isPending}
                    >
                      {isPending ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </div>
                {isSuccess && (
                  <p className="text-sm text-green-700">
                    Thank you — your message has been sent.
                  </p>
                )}
                {isError && (
                  <p className="text-sm text-red-600">
                    {error.message ||
                      "Unable to send your message. Please try again later."}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-gray-500 py-2 text-center md:flex md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div>
            <Logo className="h-12 w-auto" />
          </div>

          <div className="mt-4 flex items-center justify-center space-x-8 md:mt-0">
            <Link href="#" className="text-sm hover:text-gray-400">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
