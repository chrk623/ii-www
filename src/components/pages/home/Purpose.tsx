import React from "react";
import Link from "next/link";

import { buttonVariants } from "../../ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Purpose() {
  return (
    <MaxWidthWrapper>
      <div className="mx-6 my-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <h1 className="text-left text-5xl font-semibold tracking-tight text-primary">
            Our regional expertise and dedication will drive significant
            economic growth.
          </h1>
        </div>
        <div className="col-span-6">
          <p className="mb-6 max-w-xl text-lg font-semibold tracking-tight text-gray-400">
            At Integer Investments, we prioritize innovation, value creation,
            and growth in our interactions with customers and communities. We
            actively seek diverse perspectives, promoting a culture that
            encourages new ideas and solutions. Our aim is to create an
            environment where everyone feels valued and can contribute to our
            collective success. We support regional property developers, and
            construction companies in underserved areas across the UK. Our
            property development loans range from £50,000 to £250,000, providing
            the financial backing needed to regenerate and build communities.
          </p>

          <Link href="/our-purpose" className={buttonVariants()}>
            Our Purpose
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
