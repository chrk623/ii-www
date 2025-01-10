import React from "react";
import CustomerForm from "@/components/common/CustomerForm.tsx";

function page() {
  return (
    <CustomerForm
      title="Looking to finance your real estate development? Fill the form below."
      formUrl="https://forms.monday.com/forms/embed/52308e45d13c5d6c5c7e4efa1ca4c575?r=use1"
    />
  );
}

export default page;
