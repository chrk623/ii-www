import React from "react";

import LendingCover from "@/components/pages/lending/BrokersCover";
import BrokersPartnership from "@/components/pages/lending/BrokersPartnership";
import BrokersSolutions from "@/components/pages/lending/BrokersSolutions";
import BrokersFinancing from "@/components/pages/lending/BrokersFinancing";
import BrokersFutures from "@/components/pages/lending/BrokersFutures";

const page = () => {
  return (
    <>
      <LendingCover />

      <BrokersPartnership />

      <BrokersSolutions />

      <BrokersFinancing />

      <BrokersFutures />
    </>
  );
};

export default page;
