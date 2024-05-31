import React from "react";
import Link from "next/link";

export default function Cover() {
  return (
    <section
      className="relative overflow-hidden bg-blue-900/5 bg-cover bg-center py-40 dark:bg-blue-900/20 md:py-48"
      style={{ backgroundImage: 'url("/images/home/cover.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              A financial institution with a purpose
            </h1>
            <p className="max-w-xl text-lg font-medium text-white">
              Integer Investments is dedicated to fostering positive change
              within the property development ecosystem. We offer accessible,
              tailored property development loans and invest directly in
              affordable housing projects. Our regional knowledge and enthusiasm
              drive economic growth, helping to rejuvenate and build communities
              where it&apos;s needed most.
            </p>

            <div className="mt-6 flex flex-col space-x-0 space-y-2 md:space-y-0 lg:flex-row lg:space-x-2">
              <Link
                href=""
                className="inline-flex h-10 w-full items-center justify-center overflow-hidden truncate whitespace-nowrap rounded-md bg-primary px-6 font-medium tracking-wide text-secondary sm:w-auto"
              >
                EXPLORE LENDING <i className="mdi mdi-chevron-right ms-1"></i>
              </Link>
              <Link
                href=""
                className="inline-flex h-10 w-full items-center justify-center overflow-hidden truncate whitespace-nowrap rounded-md bg-primary px-6 font-medium tracking-wide text-secondary sm:w-auto"
              >
                EXPLORE INVESTMENTS{" "}
                <i className="mdi mdi-chevron-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
