import React from "react";

import ImageOpacity from "@/components/common/ImageOpacity";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LendingForm from "@/components/forms/LendingForm";

function Page() {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center py-4 md:py-12"
      style={{ backgroundImage: `url("/images/contact/bg.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="relative bg-white p-12">
        <LendingForm />
      </div>
    </MaxWidthWrapper>
  );

  // return <LendingForm />;
}

export default Page;
