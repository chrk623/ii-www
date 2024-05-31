import React from "react";

import {
  CogIcon,
  DocumentMagnifyingGlassIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import IconCard from "~/components/common/icon-card";

const Values = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="mb-2 uppercase text-primary">Our Values</h2>
      <h1 className="mb-8 text-4xl font-bold">This is our promise to you</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {valuesData.map((item, index) => {
          return (
            <IconCard
              key={index}
              //   icon={<item.icon className="h-6 w-6 rotate-45" />}
              icon={<></>}
              title={item.title}
              description={item.desc}
            />
          );
        })}
      </div>
    </div>
  </section>
);

const valuesData = [
  {
    icon: HomeModernIcon,
    title: "Achieving Success Together",
    desc: "Our ambitious goals for Integer Investments can only be realized through collaboration. We rely on our team, suppliers, partners, customers, and communities to transform the world and achieve our full potential. We excel in building lasting relationships and connecting people within the ecosystems we create. We prioritize collective success over individual gains and value diverse perspectives, believing they make us stronger.",
  },
  {
    icon: UserIcon,
    title: "Integrity First",
    desc: "We prioritize doing what's right over what's expedient, even when no one is watching. This commitment means being open and honest, especially when challenges arise. We clearly communicate how we will address issues and follow through with solutions that best serve our customers. We are dedicated to rebuilding and advancing the reputation of banking by leading with integrity and fostering trust with our customers and local communities.",
  },
  {
    icon: CogIcon,
    title: "We are dreamers",
    desc: "We believe in the immense potential of our business, customers, and communities, which is why we dream big. This vision isn't about becoming a large corporation but about embracing an entrepreneurial spirit and having the courage to push boundaries. We challenge ourselves to innovate and break away from outdated systems and methods. Our approach focuses on continuous improvement, seeking new and creative solutions to longstanding problems. We may start small, but our aspirations are always grand.",
  },
  {
    icon: DocumentMagnifyingGlassIcon,
    title: "Community Commitment",
    desc: "We are dedicated to making a positive impact in the communities we serve. This commitment drives our efforts to foster sustainable development, create local job opportunities, and support initiatives that enhance the quality of life for residents. By working closely with community leaders, businesses, and organizations, we ensure our projects align with the needs and aspirations of those we serve. We believe that strong, vibrant communities are the foundation of a prosperous future.",
  },
];

export default Values;
