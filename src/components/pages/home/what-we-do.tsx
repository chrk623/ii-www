import React from "react";

import {
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import IconCard from "~/components/common/icon-card";

export default function WhatWeDo() {
  return (
    <section className="relative py-16 md:py-24" id="what-we-do">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 text-5xl font-semibold leading-normal">
            WHAT WE DO
          </h3>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {doData.map((item, index) => {
            return (
              <IconCard
                key={index}
                icon={<item.icon className="size-6 rotate-45" />}
                title={item.title}
                description={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const doData = [
  {
    icon: HomeModernIcon,
    title: "Developing Communities",
    desc: "Collaborating to rejuvenate and strengthen housing opportunities.",
  },
  {
    icon: UserIcon,
    title: "Regional Expertise and Dedication",
    desc: "Relationship Managers with deep understanding of your business needs.",
  },
  {
    icon: CogIcon,
    title: "Innovative Development Projects",
    desc: "Dedicated to advancing innovative and affordable development initiatives.",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Creating Tailored Solutions",
    desc: "Recognizing your challenges and collaborating to provide customized funding solutions.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Driving Economic Prosperity",
    desc: "Our lending commitment fuels economic growth and prosperity.",
  },
  {
    icon: BriefcaseIcon,
    title: "Promoting Regional Job Creation",
    desc: "Generating jobs and supporting developers focused on local employment opportunities.",
  },
];
