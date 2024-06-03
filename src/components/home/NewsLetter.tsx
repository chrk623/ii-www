import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Newsletter() {
  return (
    <div
      className="relative items-center overflow-hidden bg-cover bg-center py-16"
      style={{ backgroundImage: 'url("/images/home/newsletter.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container relative">
        <div className="mt-10 grid grid-cols-1 text-center md:mt-24">
          <h4 className="mb-5 text-4xl font-bold capitalize leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>

          <div className="subscribe-form mb-3 mt-6 items-center">
            <form className="mx-auto max-w-xl">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="yourname@domain.com"
                />
                <Button type="submit">Subscribe Now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
