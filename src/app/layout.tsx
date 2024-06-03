import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";

import TailwindIndicator from "@/components/TailwindIndicator";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <TRPCReactProvider>
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
            <Footer />
            <TailwindIndicator />
          </TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
