"use client";

// import React, { useState } from "react";
import { type z } from "zod";
import { api } from "@/trpc/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormMessage,
  FormLabel,
  FormItem,
  FormControl,
} from "@/components/ui/form";

import { lendingFormSchema } from "@/lib/form-utils";
import MaxWidthWrapper from "../MaxWidthWrapper";

const LendingForm = () => {
  const form = useForm<z.infer<typeof lendingFormSchema>>({
    resolver: zodResolver(lendingFormSchema),
  });

  // const homeRouter = api.home.getLatest.useQuery();

  // const data = api.home.hello.useQuery({ text: "from tRPC" }).data;

  const { mutate, isSuccess } = api.home.create.useMutation();
  function onSubmit(values: z.infer<typeof lendingFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center py-4 md:py-6"
      // style={{ backgroundImage: `url("/images/contact/bg.png")` }}
    >
      {/* <ImageOpacity opacity={50} /> */}
      <div className="container relative bg-white p-4 text-left">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <div className="md:col-span-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Full name *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Full address of where you live *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Street address, City, State, Postal code, Country"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="companyDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      If you intend to buy through a company: Company name and
                      number, registered company address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company name, company number, registed office street address, City, State, Postal code, Country"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-7">
              <FormField
                control={form.control}
                name="propertyAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Full address of the property you intend to buy *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Street address, City, State, Postal code, Counrty"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-5">
              <FormField
                control={form.control}
                name="propertyPurchasePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Property purchase price *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter a number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="renovationCosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Renovation costs *
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="desiredLoan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Desired total loan *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="loanTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Desired loan term *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="How many months will you need the loan"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-end space-x-4 md:col-span-12">
              <FormField
                control={form.control}
                name="criminalOffence"
                render={() => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold text-primary">
                      Has any of the borrowers ever been convicted of a criminal
                      offence? *
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full text-gray-500">
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankruptcyProceedings"
                render={() => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold text-primary">
                      Has any of the borrowers ever been through bankruptcy
                      proceedings? *
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full text-gray-500">
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="directorDisqualified"
                render={() => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold text-primary">
                      Has any of the directors ever been disqualified? *
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full text-gray-500">
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* <div className="md:col-span-6"> */}
            <div className="flex items-end space-x-4 md:col-span-12">
              <FormField
                control={form.control}
                name="netAssets"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold text-primary">
                      What are the combined net assets of the borrowers? Specify
                      assets and liabilities with details of each *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Assets (e.g. house) minus lobailities (e.g. mortgage)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* </div> */}

              {/* <div className="md:col-span-6"> */}
              <FormField
                control={form.control}
                name="combinedIncome"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-semibold text-primary">
                      What is the combined income of the borrowers? Specify
                      sources *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Salary, rental income, dividends"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="renovationDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Renovation details *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Specify what type of renovations are required and the expected costs for each, as well as the expected timeline."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="exitStrategy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Exit strategy *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Explain what is your exit strategy. You plan on selling the property? Remortgage? What is the expected GDV? Provide comparables to justify purchase and remortgage/selling price."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Your experience *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your previous experience with similar projects."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* New fields start here */}
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="creditReport1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Credit report for borrower 1 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="creditReport2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Credit report for borrower 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="creditReport3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Credit report for borrower 3
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="creditReport4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Credit report for borrower 4
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="proofIncome1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of income for borrower 1 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="proofIncome2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of income for borrower 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="proofIncome3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of income for borrower 3
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="proofIncome4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of income for borrower 4
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="nationalInsuranceNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      KYC/AML: National Insurance Number *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="KYC/AML: our solicitors need National Insurance Number, IDs and proof of address for ALL borrowers."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="idBorrower1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      ID for borrower 1 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="idBorrower2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      ID for borrower 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="idBorrower3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      ID for borrower 3
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="idBorrower4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      ID for borrower 4
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="addressProof1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of address for borrower 1 *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="addressProof2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of address for borrower 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="addressProof3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of address for borrower 3
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="addressProof4"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Proof of address for borrower 4
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="cursor-pointer file:rounded file:bg-primary file:text-white file:hover:bg-primary/90"
                        {...form.register(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="solicitors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Your solicitors *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name, phone and email of your solicitors. If you prefer to be dual represented we can offer that option."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="refusedLending"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Have you been refused lending elsewhere, why?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Have you been refused lending elsewhere and why"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="referredByBroker"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      Are you being referred by a broker?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please report the name of the broker. If not, write NA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="completionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-primary">
                      When is your target completion date? *
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Target completion date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="declareInfo"
                render={({ field }) => (
                  <FormItem className="justify-between space-x-3">
                    <FormControl>
                      <Input
                        // type="checkbox" {...field}
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel className="font-semibold text-primary">
                      I declare that the info I’ve provided is accurate &
                      complete.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="authorizeChecks"
                render={({ field }) => (
                  <FormItem className=" justify-between space-x-3">
                    <FormControl>
                      {/* <input type="checkbox" {...field} /> */}
                      <Input
                        // type="checkbox" {...field}
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel className="font-semibold text-primary">
                      I authorize Integer Investments to conduct background
                      checks on me and my company, including credit reports.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-12">
              <FormField
                control={form.control}
                name="subscribeNewsletter"
                render={({ field }) => (
                  <FormItem className="justify-between space-x-3">
                    <FormControl>
                      {/* <input type="checkbox" {...field} /> */}
                      <Input
                        // type="checkbox" {...field}
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel className="font-semibold text-primary">
                      I want to subscribe to the newsletter.
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center md:col-span-12">
              <Button type="submit" className="w-48">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
};

export default LendingForm;
