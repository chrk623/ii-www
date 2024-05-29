"use client";

import React from "react";
// import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FocusCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    customPaging: () => <div className="h-3 w-3 rounded-full bg-white" />,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="relative py-16 md:py-24" id="focus-carousel">
      <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
          {focusData.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  layout="responsive"
                  width={700}
                  height={475}
                  className="h-auto w-full rounded-lg"
                  alt={item.title}
                />
                <div className="absolute inset-y-0 left-0 flex w-1/2 items-center  p-8">
                  <div className="text-left">
                    <div className="text-primary mb-4 text-6xl leading-none">
                      “
                    </div>
                    <h3 className="text-primary text-4xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const focusData = [
  {
    image: "/images/focus/focus1.png",
    title: "A financial institution that promote regional prosperity",
  },
  {
    image: "/images/focus/focus2.png",
    title: "A financial institution that creates regional jobs",
  },
  {
    image: "/images/focus/focus1.png",
    title: "A financial institution that help develop social housing",
  },
  {
    image: "/images/focus/focus2.png",
    title: "A financial institution that's building communities",
  },
  {
    image: "/images/focus/focus1.png",
    title: "A financial institution that support your dreams",
  },
];
