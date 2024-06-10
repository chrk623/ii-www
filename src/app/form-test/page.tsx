import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BorrowerForm from "@/components/forms/BorrowForm";

const Page = () => {
  return (
    <MaxWidthWrapper className="my-12">
      <BorrowerForm />
    </MaxWidthWrapper>
  );
};

export default Page;
