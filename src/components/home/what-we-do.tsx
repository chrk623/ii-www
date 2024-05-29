import React from "react";
import Link from "next/link";
// import { servicesData } from "../data/data";

import {
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
// import UserIcon from "@heroicons/react/16/solid";

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
            let Icon = item.icon;
            return (
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-700"
                key={index}
              >
                <div className="flex size-14 -rotate-45 items-center justify-center rounded-full bg-gradient-to-r from-transparent to-gray-500/10 text-center text-gray-500 duration-500 group-hover:bg-gray-500/10">
                  <Icon className="size-6 rotate-45"></Icon>
                </div>

                <div className="content relative z-1 mt-6 flex-grow">
                  <Link
                    href=""
                    className="title text-lg font-semibold hover:text-gray-500"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-3 text-slate-400">{item.desc}</p>
                </div>

                <div className="absolute -end-16 bottom-0">
                  <div className="size-48 text-gray-500 opacity-[0.04] duration-500 group-hover:opacity-10 dark:opacity-[0.04]"></div>
                </div>
              </div>
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
