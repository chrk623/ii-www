import React from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

export default function LR({
  imageUrl,
  title,
  description,
  imagePosition,
}: Props) {
  const imageComponent = (
    <div className="relative flex flex-col gap-6 md:col-span-6">
      <div className="relative h-0 w-full pb-[100%]">
        <Image
          src={imageUrl}
          fill
          sizes="100vw"
          className="rounded-lg object-cover duration-500 group-hover:scale-110"
          alt=""
        />
      </div>
    </div>
  );

  const textComponent = (
    <div className="md:col-span-6">
      <div className="lg:ms-8">
        <div className="mb-6">
          <div className="mb-3 flex items-start">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const innerComponent =
    imagePosition === "left" ? (
      <>
        {imageComponent}
        {textComponent}
      </>
    ) : (
      <>
        {textComponent}
        {imageComponent}
      </>
    );
  return (
    <section className="relative py-16 md:py-24" id="overview">
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          {innerComponent}
        </div>
      </div>
    </section>
  );
}
