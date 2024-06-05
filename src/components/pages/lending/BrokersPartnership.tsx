import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "../../MaxWidthWrapper";

export default function BrokersPartnership() {
  return (
    <MaxWidthWrapper>
      <div className="mb-10 mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/home/overview1.png"
              //   src="/images/brokers/partership.png"
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
              <h6 className="mb-2 text-lg font-semibold uppercase text-primary">
                Building Long-Term Partnerships
              </h6>
              <h3 className="mb-4 text-2xl font-semibold leading-normal text-gray-500">
                Simplifying Property Lending
              </h3>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We believe in the power of collaboration. Our local experts work
                seamlessly with professional advisers to form dedicated deal
                teams. By partnering with you and your client, our Relationship
                Managers and Credit Partners personally visit development sites,
                ensuring we fulfil our commitments and create a smooth and
                efficient lending experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
