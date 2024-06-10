import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { investmentsAssetsData } from "./investments-data";

export default function InvestmentsAssets() {
  return (
    <MaxWidthWrapper className="my-12">
      {/* <div className="my-24 grid grid-cols-1 text-center md:my-6">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          OUR ASSETS
        </h3>
      </div> */}

      {/* remove div below if our assets above is needed */}
      <div className="pt-1">
        {investmentsAssetsData.map((item, index) => (
          <div className="mx-auto mt-10 max-w-4xl" key={index}>
            <div className="group relative overflow-hidden">
              <Image
                src={item.image}
                alt=""
                layout="responsive"
                width={0}
                height={0}
                className="transform rounded shadow-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex flex-col text-center">
                  <h1 className="text-8xl font-bold text-primary">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
