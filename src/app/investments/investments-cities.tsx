import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function InvestmentsCities() {
  return (
    <MaxWidthWrapper>
      <div className="my-8 text-center">
        <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
          Promoting Affordable Housing and Community Growth
        </h3>
        <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
          Discover our range of affordable housing projects designed to offer
          quality living spaces and support economic regeneration. Our
          investments are tailored to meet the needs of communities, ensuring
          sustainable development and growth. We are dedicated to creating
          affordable housing solutions that provide long-term benefits for
          residents and local economies.
        </p>
      </div>

      <div className="my-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/investments/london.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">London</h2>
              <h3 className="pt-1 text-2xl font-bold text-primary">
                United Kingdom
              </h3>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We have been investing in affordable housing in Central London
                since 2012, targeting underserved communities. Our projects aim
                to provide high-quality, affordable living spaces that enhance
                the quality of life for residents. By focusing on sustainable
                development and community integration, we strive to create
                vibrant, inclusive neighborhoods that cater to the diverse needs
                of London&apos;s population. Our commitment to Central
                London&apos;s housing market not only addresses the housing
                shortage but also contributes to the social and economic
                vitality of the area.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">New York City</h2>
              <h3 className="pt-1 text-2xl font-bold text-primary">
                United States
              </h3>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We invest in strategically located properties in New York City,
                focusing on affordable housing solutions for underserved
                communities in Harlem. Our investments aim to revitalize
                neighborhoods, providing residents with safe, modern, and
                affordable living options. By working closely with local
                stakeholders and adhering to sustainable development practices,
                we ensure that our projects contribute positively to the urban
                landscape. Our commitment to New York City&apos;s housing market
                is driven by a desire to create inclusive communities that offer
                opportunities for growth and stability for all residents.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/investments/newyork.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
