"use client";

// components/BorrowerForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const BorrowFormSchema = z.object({
  idBorrower1: z.string().nonempty("ID for borrower 1 is required"),
  idBorrower2: z.string().nonempty("ID for borrower 2 is required"),
  idBorrower3: z.string().optional(),
  proofAddressBorrower1: z
    .string()
    .nonempty("Proof of address for borrower 1 is required"),
  proofAddressBorrower2: z
    .string()
    .nonempty("Proof of address for borrower 2 is required"),
  proofAddressBorrower3: z.string().optional(),
  solicitors: z.string().nonempty("Solicitors details are required"),
  refusedLending: z.string().optional(),
  referredByBroker: z.string().optional(),
  targetCompletionDate: z
    .string()
    .nonempty("Target completion date is required"),
  signature: z.string().nonempty("Signature is required"),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
  authorizeChecks: z.boolean().optional(),
  subscribeNewsletter: z.boolean().optional(),
});
type TBorrowFormSchema = z.infer<typeof BorrowFormSchema>;

const LendingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBorrowFormSchema>({
    resolver: zodResolver(BorrowFormSchema),
  });

  //   const onsubmit = ({ email, password }: TAuthCredentialValidator) => {
  //     // mutate({ email, password });
  //     console.log();
  //   };

  // <form onSubmit={handleSubmit(onSubmit)}>
  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-6">
      <div className="md:col-span-2">
        <label className="block">ID for borrower 1 *</label>
        <input
          type="file"
          {...register("idBorrower1")}
          className="w-full border p-2"
        />
        {errors.idBorrower1 && (
          <span className="text-red-500">{errors.idBorrower1.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">ID for borrower 2 *</label>
        <input
          type="file"
          {...register("idBorrower2")}
          className="w-full border p-2"
        />
        {errors.idBorrower2 && (
          <span className="text-red-500">{errors.idBorrower2.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">ID for borrower 3</label>
        <input
          type="file"
          {...register("idBorrower3")}
          className="w-full border p-2"
        />
        {errors.idBorrower3 && (
          <span className="text-red-500">{errors.idBorrower3.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">Proof of address for borrower 1 *</label>
        <input
          type="file"
          {...register("proofAddressBorrower1")}
          className="w-full border p-2"
        />
        {errors.proofAddressBorrower1 && (
          <span className="text-red-500">
            {errors.proofAddressBorrower1.message}
          </span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">Proof of address for borrower 2 *</label>
        <input
          type="file"
          {...register("proofAddressBorrower2")}
          className="w-full border p-2"
        />
        {errors.proofAddressBorrower2 && (
          <span className="text-red-500">
            {errors.proofAddressBorrower2.message}
          </span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">Proof of address for borrower 3</label>
        <input
          type="file"
          {...register("proofAddressBorrower3")}
          className="w-full border p-2"
        />
        {errors.proofAddressBorrower3 && (
          <span className="text-red-500">
            {errors.proofAddressBorrower3.message}
          </span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">Your solicitors *</label>
        <input
          type="text"
          {...register("solicitors")}
          className="w-full border p-2"
        />
        {errors.solicitors && (
          <span className="text-red-500">{errors.solicitors.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">
          Have you been refused lending elsewhere, why?
        </label>
        <input
          type="text"
          {...register("refusedLending")}
          className="w-full border p-2"
        />
        {errors.refusedLending && (
          <span className="text-red-500">{errors.refusedLending.message}</span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">Are you being referred by a broker?</label>
        <input
          type="text"
          {...register("referredByBroker")}
          className="w-full border p-2"
        />
        {errors.referredByBroker && (
          <span className="text-red-500">
            {errors.referredByBroker.message}
          </span>
        )}
      </div>
      <div className="md:col-span-2">
        <label className="block">When is your target completion date? *</label>
        <input
          type="date"
          {...register("targetCompletionDate")}
          className="w-full border p-2"
        />
        {errors.targetCompletionDate && (
          <span className="text-red-500">
            {errors.targetCompletionDate.message}
          </span>
        )}
      </div>
      <div className="md:col-span-3">
        <label className="block">Your Signature*</label>
        <input
          type="text"
          {...register("signature")}
          className="w-full border p-2"
        />
        {errors.signature && (
          <span className="text-red-500">{errors.signature.message}</span>
        )}
      </div>
      <div className="flex items-center md:col-span-3">
        <label className="block">
          <input
            type="checkbox"
            {...register("agreeToTerms")}
            className="mr-2"
          />
          I declare that the info I&apos;ve provided is accurate & complete.
        </label>
        {errors.agreeToTerms && (
          <span className="text-red-500">{errors.agreeToTerms.message}</span>
        )}
      </div>
      <div className="flex items-center md:col-span-3">
        <label className="block">
          <input
            type="checkbox"
            {...register("authorizeChecks")}
            className="mr-2"
          />
          I authorize Integer Investments to conduct background checks on me and
          my company, including credit reports.
        </label>
      </div>
      <div className="flex items-center md:col-span-3">
        <label className="block">
          <input
            type="checkbox"
            {...register("subscribeNewsletter")}
            className="mr-2"
          />
          I want to subscribe to the newsletter.
        </label>
      </div>
      <div className="md:col-span-3">
        <button type="submit" className="w-full bg-blue-500 p-2 text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LendingForm;
