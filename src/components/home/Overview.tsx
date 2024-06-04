import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper";

const overviewData = [
  {
    title: "Expanding SME Funding Gap",
    content:
      "Lending to developers across the UK has significantly declined over the past five years, with the steepest reductions occurring in regional areas.",
  },
  {
    title: "Chronic Housing Undersupply",
    content:
      "Only around 235,000 of the government’s 300,000 annual housebuilding target is currently being met.",
  },
  {
    title: "£166 Billion+",
    content: "Market opportunity available.",
  },
  {
    title: "Distinct Market Position",
    content:
      "Specialist lender in development finance, with a focus on HMO conversions.",
  },
  {
    title: "Guided by a Wealth of Experience",
    content: "A blend of real estate insight and seasoned financial expertise.",
  },
];

export default function Overview() {
  return (
    <MaxWidthWrapper>
      <div className="mb-10 mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative flex flex-col gap-6 md:col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/home/overview1.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="lg:ms-8">
            <h6 className="mb-2 text-lg font-semibold uppercase text-primary">
              Industry Overview
            </h6>
            <h3 className="mb-4 text-2xl font-semibold leading-normal text-gray-500">
              Addressing a Critical Need
            </h3>

            {overviewData.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="mb-3 flex items-start">
                  <div className="me-3 mt-1.5 flex-shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                  </div>
                  <div className="max-w-xl text-gray-400">
                    <p className="block font-bold">{item.title}</p>
                    <span className="text-lg">{item.content}</span>
                  </div>
                </div>
                {index < overviewData.length - 1 && <hr className="my-6" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
