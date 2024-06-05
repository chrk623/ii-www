import React from "react";

import { Home, BookCheck, PersonStanding, TrendingUp } from "lucide-react";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const doData = [
  {
    icon: Home,
    title: "Quality Housing You Can Rely On",
    desc: "Our direct investments focus on creating affordable, high-quality housing that offers secure and comfortable living spaces for tenants. We prioritize the well-being and satisfaction of our residents, ensuring that each property meets rigorous standards for safety and comfort.",
  },
  {
    icon: BookCheck,
    title: "Supporting Community Growth",
    desc: "By investing in residential and commercial developments, we help revitalize neighborhoods and create vibrant communities. Our projects aim to provide essential infrastructure and amenities, fostering a sense of belonging and community spirit among residents.",
  },
  {
    icon: TrendingUp,
    title: "Enhancing Local Economies",
    desc: "Our investments contribute to the economic development of underserved regions. By supporting local businesses and creating job opportunities, we help stimulate economic growth and improve the quality of life for everyone in the community.",
  },
  {
    icon: PersonStanding,
    title: "Accessible and Convenient",
    desc: "We make it easy for tenants to find and secure affordable housing. Our streamlined application process ensures quick and efficient service, allowing residents to move into their new homes with minimal hassle.",
  },
];

export default function InvestmentsAdvantages() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
            FOUR ADVANTAGES
          </h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {doData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            <item.icon className="h-12 w-12 text-primary" />

            <div className="content z-1 relative mt-6 flex-grow">
              <h6 className="title text-lg font-semibold text-primary">
                {item.title}
              </h6>
              <p className="mt-3 text-lg font-semibold tracking-tight text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
