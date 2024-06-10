import React from "react";

import BrokersCover from "./brokers-cover";
import BrokersPartnership from "./brokers-partnership";
import BrokersSolutions from "./brokers-solution";
import BrokersFinancing from "./brokers-financing";
import BrokersFutures from "./brokers-futures";

const page = () => {
  return (
    <>
      <BrokersCover />

      <BrokersPartnership />

      <BrokersSolutions />

      <BrokersFinancing />

      <BrokersFutures />
    </>
  );
};

export default page;
