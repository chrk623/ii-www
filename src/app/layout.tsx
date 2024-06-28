import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";

import TailwindIndicator from "@/components/TailwindIndicator";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

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
        <body
          className={cn(
            "font-sans relative h-full antialiased",
            fontSans.variable,
          )}
        >
          <main>{children}</main>
          <TailwindIndicator />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
