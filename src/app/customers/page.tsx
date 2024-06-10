import React from "react";

import CustomersCover from "./customers-cover";
import CustomersFoundations from "./customers-foundations";
import CustomersSolutions from "./customers-solutions";
import CustomersFinancing from "./customers-financing";

import BetterFutures from "@/components/pages/better-futures";

const Page = () => {
  return (
    <>
      <CustomersCover />

      <CustomersFoundations />

      <CustomersSolutions />

      <CustomersFinancing />

      <BetterFutures />
    </>
  );
};

export default Page;
