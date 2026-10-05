"use client";

import React from "react";
import { type z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { newsletterSchema } from "@/lib/form-schemas/contact";
import { api } from "@/trpc/react";

export default function HomeNewsletter() {
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending, isSuccess, isError, error, reset } =
    api.contact.subscribeToNewsletter.useMutation({
      onSuccess: () => {
        form.reset();
      },
    });

  function onSubmit(values: z.infer<typeof newsletterSchema>) {
    reset();
    mutate(values);
  }

  return (
    <div
      className="relative items-center overflow-hidden bg-cover bg-center py-8"
      style={{ backgroundImage: 'url("/images/home/newsletter.png")' }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="container relative">
        <div className="mt-10 grid grid-cols-1 text-center md:mt-24">
          <h4 className="mb-5 text-4xl font-bold capitalize leading-normal tracking-wide text-primary lg:text-5xl lg:leading-normal">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>

          <div className="subscribe-form mb-3 mt-6 items-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-xl"
              >
                <div className="flex space-x-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1 space-y-0 text-left">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="yourname@domain.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="mt-1" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </div>
                {isSuccess && (
                  <p className="mt-3 text-sm text-green-700">
                    Thanks — you&apos;re subscribed.
                  </p>
                )}
                {isError && (
                  <p className="mt-3 text-sm text-red-600">
                    {error.message ||
                      "Unable to complete your subscription. Please try again later."}
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
