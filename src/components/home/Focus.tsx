import React from "react";
import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper";

const focusData = [
  {
    image: "/images/home/lending.png",
    title: "EXPLORE LENDING",
  },
  {
    image: "/images/home/investments.png",
    title: "EXPLORE INVESTMENTS",
  },
];

export default function Focus() {
  return (
    <MaxWidthWrapper>
      <div className="mx-6 my-24 grid grid-cols-1 text-center">
        <h3 className="text-primary text-5xl font-semibold leading-normal">
          OUR FOCUS
        </h3>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 lg:grid-cols-2">
        {focusData.map((item, index) => (
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg shadow-md"
            key={index}
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-t-lg duration-500 group-hover:scale-110"
                alt=""
              />
            </div>

            <div className="rounded-b-lg bg-gray-100 p-8">
              <Link
                href=""
                className="title text-xl font-semibold text-gray-500"
              >
                {item.title}
              </Link>

              <div className="mt-4">
                <Link href="" className="text-primary underline">
                  Find out more{" "}
                  <i className="mdi mdi-chevron-right align-middle"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
