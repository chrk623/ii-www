import React from "react";
// import Link from "next/link";
// import Image from "next/image";

export default function Newsletter() {
  return (
    <section
      className="relative items-center overflow-hidden bg-cover bg-center py-16"
      id="newsletter"
      style={{ backgroundImage: 'url("/images/focus/focus1.png")' }}
    >
      <div className="container relative">
        <div className="mt-10 grid grid-cols-1 text-center md:mt-24">
          <h4 className="text-secondary mb-5 text-4xl font-bold capitalize leading-normal tracking-wide lg:text-5xl lg:leading-normal">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>

          <div className="subscribe-form mb-3 mt-6">
            <form className="relative mx-auto max-w-xl">
              <input
                type="email"
                id="emailid"
                name="email"
                className="h-[50px] w-full rounded-full bg-white/60 py-4 pe-40 ps-6 text-black shadow outline-none dark:bg-slate-900/60 dark:text-white dark:shadow-gray-800"
                placeholder="yourname@domain.com"
              />
              <button
                type="submit"
                className="bg-primary text-secondary absolute end-[3px] top-[2px] inline-flex h-[46px] items-center justify-center rounded-full px-6 font-medium tracking-wide"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
