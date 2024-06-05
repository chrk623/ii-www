import React from "react";

import InvestmentsCover from "@/components/pages/investments/InvestmentsCover";
import InvestmentsPromote from "@/components/pages/investments/InvestmentsPromote";
import InvestmentsAssets from "@/components/pages/investments/InvestmentsAssets";
import InvestmentsAdvantages from "@/components/pages/investments/InvestmentsAdvantages";

const page = () => {
  return (
    <>
      <InvestmentsCover />

      <InvestmentsPromote />

      <InvestmentsAssets />

      <InvestmentsAdvantages />
    </>
  );
};

export default page;
