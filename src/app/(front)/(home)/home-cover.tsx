import React from "react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import ImageOpacity from "@/components/common/ImageOpacity";

const HomeCover = () => {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center md:py-48"
      style={{ backgroundImage: `url("/images/home/cover.jpg")` }}
    >
      <ImageOpacity opacity={40} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              A financial institution with a purpose
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Integer Investments is dedicated to fostering positive change
              within the property development ecosystem. We offer accessible,
              tailored property development loans and invest directly in
              affordable housing projects. Our regional knowledge and enthusiasm
              drive economic growth, helping to rejuvenate and build communities
              where it&apos;s needed most.
            </p>
            <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Link href="/lending/customers" className={buttonVariants()}>
                Explore Lending
              </Link>
              <Link href="/investments" className={buttonVariants()}>
                Explore Our Investments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeCover;
