import React from "react";

import LendingForm from "@/components/forms/LendingForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BrokersFinancing = () => {
  return (
    <MaxWidthWrapper className="my-2">
      <div className="text-center">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          Interested in Financing Your Client&apos;s Project?
        </h3>
        <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
          If you&apos;re interested in joining our panel or seeking finance for
          a client&apos;s project, get in touch with us today. We offer bespoke,
          flexible lending solutions tailored to your needs, ensuring quick and
          efficient access to funds.
        </p>
        {/* <LendingForm /> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "100.25%",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://forms.monday.com/forms/embed/52308e45d13c5d6c5c7e4efa1ca4c575?r=use1"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              // boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)",
            }}
            allowFullScreen
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BrokersFinancing;
