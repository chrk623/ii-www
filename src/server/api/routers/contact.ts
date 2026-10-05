import { TRPCError } from "@trpc/server";

import {
  contactFormSchema,
  newsletterSchema,
} from "@/lib/form-schemas/contact";
import { resend } from "@/lib/resend";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const EMAIL_TO = "info@integerinvestments.com";
const EMAIL_FROM =
  "Integer Investments <noreply@contact.integerinvestments.com>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export const contactRouter = createTRPCRouter({
  contactUs: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      const { firstName, lastName, email, phone, message } = input;

      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email,
        subject: `New contact enquiry from ${firstName} ${lastName}`,
        text: [
          "You have received a new enquiry via the Integer Investments website contact form.",
          "",
          `First name: ${firstName}`,
          `Last name: ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <p>You have received a new enquiry via the Integer Investments website contact form.</p>
          <p><strong>First name:</strong> ${escapeHtml(firstName)}<br />
          <strong>Last name:</strong> ${escapeHtml(lastName)}<br />
          <strong>Email:</strong> ${escapeHtml(email)}<br />
          <strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        `,
      });

      if (error) {
        console.error("Failed to send contact email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unable to send your message. Please try again later.",
        });
      }

      return { success: true as const };
    }),

  subscribeToNewsletter: publicProcedure
    .input(newsletterSchema)
    .mutation(async ({ input }) => {
      const { email } = input;

      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        replyTo: email,
        subject: "New newsletter subscription",
        text: [
          "Someone has subscribed to the newsletter from the Integer Investments website.",
          "",
          `Subscriber email: ${email}`,
          "",
          "Please add them to the mailing list at your earliest convenience.",
        ].join("\n"),
        html: `
          <p>Someone has subscribed to the newsletter from the Integer Investments website.</p>
          <p><strong>Subscriber email:</strong> ${escapeHtml(email)}</p>
          <p>Please add them to the mailing list at your earliest convenience.</p>
        `,
      });

      if (error) {
        console.error("Failed to send newsletter subscription email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Unable to complete your subscription. Please try again later.",
        });
      }

      return { success: true as const };
    }),
});
