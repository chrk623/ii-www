import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "../../MaxWidthWrapper";

const assetsData = [
  {
    image: "/images/investments/ny-city1.png",
    title: "NEW YORK CITY",
  },
  {
    image: "/images/investments/upstate-ny.png",
    title: "UPSTATE NEW YORK",
  },
  {
    image: "/images/investments/ny-city2.png",
    title: "NEW YORK CITY",
  },
  {
    image: "/images/investments/london1.png",
    title: "LONDON",
  },
  {
    image: "/images/investments/london2.png",
    title: "LONDON",
  },
  {
    image: "/images/investments/london3.png",
    title: "LONDON",
  },
  {
    image: "/images/investments/north-italy1.png",
    title: "NORTH OF ITALY",
  },
  {
    image: "/images/investments/north-italy2.png",
    title: "NORTH OF ITALY",
  },
];

export default function InvestmentsAssets() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="my-24 grid grid-cols-1 text-center md:my-6">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          OUR ASSETS
        </h3>
      </div>

      {assetsData.map((item, index) => (
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
    </MaxWidthWrapper>
  );
}
