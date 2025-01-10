import React from "react";

import SolicitorsCover from "./solicitors-cover";
import SolicitorsFinance from "./solicitors-finance";
import SolicitorsSolutions from "./solicitors-solutions";
import SolicitorsForm from "./solicitors-form";

const page = () => {
  return (
    <>
      <SolicitorsCover />

      <SolicitorsFinance />

      <SolicitorsSolutions />

      <SolicitorsForm />
    </>
  );
};

export default page;
