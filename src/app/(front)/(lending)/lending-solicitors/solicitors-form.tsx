import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const solutionsData = [
  {
    title: "Innovative Transaction Management Software",
    desc: "Our internally developed transaction management software ensures a streamlined process for all our clients. This cutting-edge tool enhances efficiency and transparency, making every step of the lending journey seamless and hassle-free. Trust our technology-driven approach to simplify your transactions.",
  },
  {
    title: "Embracing a Paperless Future",
    desc: "We utilize digital signatures and documents, fully compliant with PG82 HMLR guidelines. Our innovative, paperless approach streamlines the process, enhances security, and boosts efficiency, ensuring seamless and quick real estate transactions.",
  },
];

export default function SolicitorsForm() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="mb-4 text-3xl font-semibold leading-normal text-primary">
            We utilize digital signatures and documents, fully compliant with
            PG82 HMLR guidelines. Our innovative, paperless approach streamlines
            the process, enhances security, and boosts efficiency, ensuring
            seamless and quick real estate transactions.
          </h3>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingBottom: "100.25%",
          overflow: "hidden",
        }}
      >
        <iframe
          id="solicitors-form"
          src="https://forms.monday.com/forms/embed/25efb68fdec7a7cb3c0694bdc449e717?r=use1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </MaxWidthWrapper>
  );
}
