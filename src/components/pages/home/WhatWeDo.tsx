import React from "react";

import {
  Home,
  Users,
  Cog,
  FileSearch2,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";
import MaxWidthWrapper from "../../MaxWidthWrapper";

const doData = [
  {
    icon: Home,
    title: "Developing Communities",
    desc: "Collaborating to rejuvenate and strengthen housing opportunities.",
  },
  {
    icon: Users,
    title: "Regional Expertise and Dedication",
    desc: "Relationship Managers with deep understanding of your business needs.",
  },
  {
    icon: Cog,
    title: "Innovative Development Projects",
    desc: "Dedicated to advancing innovative and affordable development initiatives.",
  },
  {
    icon: FileSearch2,
    title: "Creating Tailored Solutions",
    desc: "Recognizing your challenges and collaborating to provide customized funding solutions.",
  },
  {
    icon: TrendingUp,
    title: "Driving Economic Prosperity",
    desc: "Our lending commitment fuels economic growth and prosperity.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Promoting Regional Job Creation",
    desc: "Generating jobs and supporting developers focused on local employment opportunities.",
  },
];

export default function WhatWeDo() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
          WHAT WE DO
        </h3>
      </div>

      <div className="m-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {doData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            <item.icon className="text-primary" />

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
