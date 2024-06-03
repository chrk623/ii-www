import * as React from "react";
import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const missionData = [
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

export function MissionCarousel() {
  return (
    <MaxWidthWrapper className="my-12">
      <Carousel>
        <CarouselContent>
          {missionData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Image
                src={item.image}
                alt="Image 2"
                width={500}
                height={300}
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MaxWidthWrapper>
  );
}
