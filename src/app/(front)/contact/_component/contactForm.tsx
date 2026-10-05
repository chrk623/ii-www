"use client";

import React from "react";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormMessage,
  FormLabel,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/lib/form-schemas/contact";
import { api } from "@/trpc/react";

const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    reset();
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full max-w-md grid-cols-1 gap-6"
      >
        <div>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  First Name *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your first name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Last Name *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your last name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Email *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Phone *
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Type your phone number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-white">
                  Message *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Type your message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isSuccess && (
          <p className="text-center text-sm text-green-300">
            Thank you — your message has been sent.
          </p>
        )}
        {isError && (
          <p className="text-center text-sm text-red-300">
            {error.message ||
              "Unable to send your message. Please try again later."}
          </p>
        )}
        <div className="flex items-center justify-center">
          <Button
            disabled={isPending}
            className="px-4 py-2 font-bold"
            type="submit"
          >
            {isPending ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
