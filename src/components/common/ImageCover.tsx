import React from "react";
import type { ReactNode } from "react";

import ImageOpacity from "./ImageOpacity";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  children?: ReactNode;
}

export default function ImageCover({
  title,
  description,
  imageUrl,
  children,
}: Props) {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center md:py-48"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <ImageOpacity opacity={40} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              {title}
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
