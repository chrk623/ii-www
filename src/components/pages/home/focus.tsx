import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Focus() {
  return (
    <section className="relative py-16 md:py-24" id="focus">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
            OUR FOCUS
          </h3>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 place-items-center gap-12 md:grid-cols-2 lg:grid-cols-2`}
        >
          {focusData.map((item, index) => (
            <div
              className="group relative w-full max-w-2xl overflow-hidden rounded-lg shadow-md"
              key={index}
            >
              <div className="relative overflow-hidden">
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
                  className="title text-xl font-semibold duration-500 ease-in-out hover:text-secondary"
                >
                  {item.title}
                </Link>

                <div className="mt-4">
                  <Link href="" className="text-primary">
                    Find out more{" "}
                    <i className="mdi mdi-chevron-right align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
