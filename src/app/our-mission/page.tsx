import React from "react";

import BasicCover from "~/components/common/basic-cover";
import LR from "~/components/common/lr";
import Values from "~/components/pages/mission/values";

export default function Page() {
  return (
    <>
      <BasicCover
        title="Building Better Futures"
        description="Integer Investments is dedicated to creating better futures for communities across the UK, particularly those in greatest need, supporting real estate developers with the power to dream."
      />

      <LR
        imageUrl="/images/mission/commitment.png"
        title="Our Commitment"
        description="We are committed to supporting regional growth by offering financial solutions that benefit both developers and the communities they serve. We value innovation, growth, and the creation of lasting value for our clients."
        imagePosition="left"
      />

      <LR
        imageUrl="/images/mission/goal.png"
        title="Our Goal"
        description="Since our inception, our goal has been to become the preferred lender for property and regional regeneration. We want to be the financial partner for those developers who are able to dream of a better future. We are dedicated to offering tailored lending solutions that stimulate economic growth and support communities in greatest need."
        imagePosition="right"
      />
      <Values />
    </>
  );
}
