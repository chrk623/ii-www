import React from "react";

import InvestorsCover from "./investors-cover";
import InvestorsCommitment from "./investors-commitment";
import InvestorsExecellence from "./investors-excellence";
import InvestorsGovernance from "./investors-governance";
import BetterFutures from "@/components/pages/better-futures";

const Page = () => {
  return (
    <>
      <InvestorsCover />

      <InvestorsCommitment />

      <InvestorsGovernance />

      <InvestorsExecellence />

      <BetterFutures />
    </>
  );
};

export default Page;
