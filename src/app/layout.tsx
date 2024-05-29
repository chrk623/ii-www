import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

import { Libre_Franklin } from "next/font/google";
import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/tailwind.scss";

import Footer from "~/components/layouts/footer";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600", "700"],
  variable: "--font-libre_franklin",
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
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body
        className={`${libre_franklin.variable} bg-white font-libre_franklin text-base text-black dark:bg-slate-900 dark:text-white`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
