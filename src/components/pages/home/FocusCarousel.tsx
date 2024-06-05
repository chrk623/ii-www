"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import ImageOpacity from "../../common/ImageOpacity";

const focusData = [
  {
    image: "/images/home/carousel1.png",
    title: "A financial institution that promotes regional prosperity",
  },
  {
    image: "/images/home/carousel2.png",
    title: "A financial institution that creates regional jobs",
  },
  {
    image: "/images/home/carousel3.png",
    title: "A financial institution that helps develop social housing",
  },
  {
    image: "/images/home/carousel4.png",
    title: "A financial institution that's building communities",
  },
  {
    image: "/images/home/carousel5.png",
    title: "A financial institution that supports your dreams",
  },
];

export default function FocusCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
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
    <div className="max-w-full overflow-hidden bg-cover bg-center">
      <div className="relative mt-24">
        <Slider {...settings}>
          {focusData.map((item, index) => (
            <div key={index} className="relative">
              <div className="overflow-hidden rounded-lg">
                <div className="h-0 pb-[60%] md:pb-[45%]">
                  <Image
                    src={item.image}
                    fill
                    className="h-2xl absolute inset-0 rounded-lg object-cover"
                    alt={item.title}
                  />
                  <ImageOpacity opacity={40} />
                </div>
                <div className="absolute inset-y-0 left-0 flex w-1/2 items-center p-8">
                  <div className="text-left">
                    <h3 className="font-quote text-2xl text-white sm:text-4xl lg:text-6xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
