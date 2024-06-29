import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import TailwindIndicator from "@/components/TailwindIndicator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Integer Investments",
  description: "Bridging finance",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <ClerkProvider>
          <body
            className={cn(
              "font-sans relative h-full antialiased",
              fontSans.variable,
            )}
          >
            <main>{children}</main>
            <TailwindIndicator />
          </body>
        </ClerkProvider>
      </TRPCReactProvider>
    </html>
  );
}
