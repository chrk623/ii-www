import React from "react";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const doData = [
  {
    title: "Residential Bridging Finance",
    desc: "For real estate investors looking to bridge the gap for a new property or development, our residential bridging finance solutions offer the flexibility and support needed to purchase, refinance, improve properties, or make further investments.",
    href: "#",
  },
  {
    title: "HMO Conversion Loans",
    desc: "Our HMO conversion loans are designed specifically for real estate investors aiming to convert properties into Houses in Multiple Occupation. These tailored finance solutions provide the necessary funds to successfully complete your conversion projects and maximize rental yields.",
    href: "#",
  },
  {
    title: "Property Development Loans",
    desc: "Targeted at real estate investors, our property development loans offer the financial backing needed to undertake new developments or refurbish existing properties. We provide flexible funding options to help you bring your property visions to life.",
    href: "#",
  },
  {
    title: "Commercial Development Finance",
    desc: "Integer Investments offers short-term commercial development finance solutions tailored for real estate investors and developers. Our lending products support the redevelopment, or renovation of commercial properties, addressing the demand for high-quality commercial spaces in key communities.",
    href: "#",
  },
];

export default function BrokersSolutions() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
            FINANCE SOLUTIONS
          </h3>
        </div>
      </div>

      <div className="mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mx-40">
        {doData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            {/* <item.icon className="h-12 w-12 text-primary" /> */}

            <div className="content z-1 relative mt-2 flex-grow">
              <h6 className="title text-2xl font-semibold text-primary">
                {item.title}
              </h6>
              <p className="mt-3 text-lg font-semibold tracking-tight text-gray-400">
                {item.desc}
              </p>
            </div>

            <Link
              href={item.href}
              className={buttonVariants({
                className: "mt-6 max-w-full lg:mt-12 lg:max-w-36",
              })}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
