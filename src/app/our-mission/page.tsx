import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MissionCarousel } from "@/components/mission/MissionCarousel";
import MissionCommitment from "@/components/mission/MissionCommitment";
import MissionGoal from "@/components/mission/MissionGoal";
import MissionPromise from "@/components/mission/MissionPromise";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="my-12">
        <div className="text-center">
          <h3 className="text-primary mb-4 text-5xl font-semibold leading-normal">
            WHAT WE DO
          </h3>
          <p className="mt-4 px-72 text-center text-lg font-semibold text-gray-400">
            Integer Investments is dedicated to creating better futures for
            communities across the UK, particularly those in greatest need,
            supporting real estate developers with the power to dream.
          </p>
        </div>
      </MaxWidthWrapper>

      <MissionCarousel />

      <MissionCommitment />

      <MissionGoal />

      <MissionPromise />
    </>
  );
};

export default Page;
