import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

const InvestmentsCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/investments/cover.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Making a Tangible Impact
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Our direct investments focus on creating affordable housing and
              fostering community development. By investing directly in
              properties, we ensure sustainable growth and provide quality
              living spaces for those in need. Our approach not only generates
              strong returns but also contributes to the betterment of the
              communities we serve. We are committed to making a lasting
              positive impact through strategic and responsible investment
              choices.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default InvestmentsCover;
