import React from "react";

import { HeartHandshake, BookCheck, Users, Badge } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const doData = [
  {
    icon: HeartHandshake,
    title: "Achieving Success Together",
    desc: "Our ambitious goals for Integer Investments can only be realized through collaboration. We rely on our team, suppliers, partners, customers, and communities to transform the world and achieve our full potential. We excel in building lasting relationships and connecting people within the ecosystems we create. We prioritize collective success over individual gains and value diverse perspectives, believing they make us stronger.",
  },
  {
    icon: BookCheck,
    title: "Integrity First",
    desc: "We prioritize doing what's right over what's expedient, even when no one is watching. This commitment means being open and honest, especially when challenges arise. We clearly communicate how we will address issues and follow through with solutions that best serve our customers. We are dedicated to rebuilding and advancing the reputation of banking by leading with integrity and fostering trust with our customers and local communities.",
  },
  {
    icon: Badge,
    title: "We are dreamers",
    desc: "We believe in the immense potential of our business, customers, and communities, which is why we dream big. This vision isn't about becoming a large corporation but about embracing an entrepreneurial spirit and having the courage to push boundaries. We challenge ourselves to innovate and break away from outdated systems and methods. Our approach focuses on continuous improvement, seeking new and creative solutions to longstanding problems. We may start small, but our aspirations are always grand.",
  },
  {
    icon: Users,
    title: "Community Commitment",
    desc: "We are dedicated to making a positive impact in the communities we serve. This commitment drives our efforts to foster sustainable development, create local job opportunities, and support initiatives that enhance the quality of life for residents. By working closely with community leaders, businesses, and organizations, we ensure our projects align with the needs and aspirations of those we serve. We believe that strong, vibrant communities are the foundation of a prosperous future.",
  },
];

export default function MissionPromise() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="text-primary mb-4 text-5xl font-semibold leading-normal">
            OUR VALUES
          </h3>
          <p className="mt-4 px-72 text-center text-lg font-semibold text-gray-400">
            This is our promise to you
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {doData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            <item.icon className="text-primary h-12 w-12" />

            <div className="content z-1 relative mt-6 flex-grow">
              <h6 className="title text-primary text-lg font-semibold">
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
