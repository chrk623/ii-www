import React from "react";
import Link from "next/link";

export default function Purpose() {
  return (
    <section className="relative py-16 md:py-24" id="about">
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="text-left text-5xl font-semibold text-primary">
              Our regional expertise and dedication will drive significant
              economic growth.
            </span>
          </div>

          <div className="md:col-span-6">
            <div className="lg:ms-8">
              <p className="mb-6 max-w-xl text-slate-400">
                At Integer Investments, we prioritize innovation, value
                creation, and growth in our interactions with customers and
                communities. We actively seek diverse perspectives, promoting a
                culture that encourages new ideas and solutions. Our aim is to
                create an environment where everyone feels valued and can
                contribute to our collective success. We support regional
                property developers, and construction companies in underserved
                areas across the UK. Our property development loans range from
                £50,000 to £250,000, providing the financial backing needed to
                regenerate and build communities.
              </p>

              <Link
                href=""
                className="font-large inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 tracking-wide text-secondary"
              >
                Our Purpose{" "}
                <i className="mdi mdi-chevron-right ms-0.5 align-middle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
