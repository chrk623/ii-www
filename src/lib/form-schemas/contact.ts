import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" }),
  lastName: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Must be 5 or more characters long" }),
  message: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const footerContactSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Must be 5 or more characters long" }),
  message: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
});

export function splitFullName(name: string): {
  firstName: string;
  lastName: string;
} {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? name;
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : firstName;

  return { firstName, lastName };
}
