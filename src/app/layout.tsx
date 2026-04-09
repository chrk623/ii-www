import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Script from "next/script";
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
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-N14E35Y12M"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N14E35Y12M');
          `}
            </Script>
            <TailwindIndicator />
          </body>
        </ClerkProvider>
      </TRPCReactProvider>
    </html>
  );
}
