import React from "react";

import InvestmentsCover from "./investments-cover";
import InvestmentsCities from "./investments-cities";
// import InvestmentsAssets from "./investments-assets";
import InvestmentsAdvantages from "./investments-advantages";

const page = () => {
  return (
    <>
      <InvestmentsCover />

      <InvestmentsCities />

      {/* <InvestmentsAssets /> */}

      <InvestmentsAdvantages />
    </>
  );
};

export default page;
