"use client";

import React from "react";

function LendingForm() {
  return (
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
        src="https://forms.monday.com/forms/embed/52308e45d13c5d6c5c7e4efa1ca4c575?r=use1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          // boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)",
        }}
        allowFullScreen
      />
    </div>
  );
}

export default LendingForm;
