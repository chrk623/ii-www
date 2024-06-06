import React from "react";

import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BrokersFinancing = () => {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="text-center">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          Interested in Financing Your Client’s Project?
        </h3>
        <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
          If you're interested in joining our panel or seeking finance for a
          client's project, get in touch with us today. We offer bespoke,
          flexible lending solutions tailored to your needs, ensuring quick and
          efficient access to funds.
        </p>

        <p className="text-5xl text-red-500">
          This form should be same as{" "}
          <Link
            href="https://www.integerinvestments.com/application"
            className="text-blue-400 underline"
          >
            this
          </Link>
          ? Or a new one replicating gbbank?
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default BrokersFinancing;
