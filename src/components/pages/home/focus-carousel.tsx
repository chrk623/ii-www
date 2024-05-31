"use client";

import React from "react";
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
    <section className="relative py-16 md:py-24" id="focus-carousel">
      <div className="relative w-full overflow-hidden">
        <Slider {...settings}>
          {focusData.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <div className="relative h-0 pb-[50%]">
                  <Image
                    src={item.image}
                    fill
                    className="absolute inset-0 h-full w-full rounded-lg object-cover"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="absolute inset-y-0 left-0 flex w-1/2 items-center p-8">
                  <div className="text-left">
                    <h3 className="font-quote text-6xl text-white">
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
    image: "/images/home/carousel1.png",
    title: "A financial institution that promote regional prosperity",
  },
  {
    image: "/images/home/carousel2.png",
    title: "A financial institution that creates regional jobs",
  },
  {
    image: "/images/home/carousel3.png",
    title: "A financial institution that help develop social housing",
  },
  {
    image: "/images/home/carousel4.png",
    title: "A financial institution that's building communities",
  },
  {
    image: "/images/home/carousel5.png",
    title: "A financial institution that support your dreams",
  },
];
