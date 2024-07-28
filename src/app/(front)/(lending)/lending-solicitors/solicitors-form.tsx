import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

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
          <p className="mt-4 px-0 text-center text-xl font-semibold text-gray-400 xl:px-36">
            Before applying, please take a look at the{" "}
            <Link
              href="/files/Integer Investments Terms and Conditions of Panel Appointment.pdf"
              className="text-blue-400 underline"
            >
              {" "}
              attached file
            </Link>{" "}
            as this represents the undertakings we require.
          </p>
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
