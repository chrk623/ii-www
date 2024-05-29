import Link from "next/link";
// import Image from "next/image";
import Navbar from "~/components/layouts/navbar";

import Purpose from "~/components/home/purpose";
import Focus from "~/components/home/focus";
import FocusCarousel from "~/components/home/focus-carousel";
import WhatWeDo from "~/components/home/what-we-do";
import Overview from "~/components/home/overview";
import Newsletter from "~/components/home/newsletter";
// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";

export default async function Home() {
  //   const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <Navbar />

      <section
        className="relative overflow-hidden bg-blue-900/5 bg-cover bg-center py-40 dark:bg-blue-900/20 md:py-48"
        id="home"
        style={{ backgroundImage: 'url("/images/home/cover.png")' }}
      >
        <div className="container relative mt-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide lg:text-5xl lg:leading-normal">
                A FINANCIAL INSTITUTION WITH A PURPOSE
              </h1>
              <p className="max-w-xl text-lg text-black">
                Integer Investments issdf dedicated to fostering positive change
                within the property development ecosystem. We offer accessible,
                tailored property development loans and invest directly in
                affordable housing projects. Our regional knowledge and
                enthusiasm drive economic growth, helping to rejuvenate and
                build communities where it&apos;s needed most.
              </p>

              <div className="mt-6 flex flex-col space-x-0 space-y-2 md:space-y-0 lg:flex-row lg:space-x-2">
                <Link
                  href=""
                  className="bg-primary text-secondary inline-flex h-10 w-full items-center justify-center overflow-hidden truncate whitespace-nowrap rounded-md px-6 font-medium tracking-wide sm:w-auto"
                >
                  EXPLORE LENDING <i className="mdi mdi-chevron-right ms-1"></i>
                </Link>
                <Link
                  href=""
                  className="bg-primary text-secondary inline-flex h-10 w-full items-center justify-center overflow-hidden truncate whitespace-nowrap rounded-md px-6 font-medium tracking-wide sm:w-auto"
                >
                  EXPLORE INVESTMENTS{" "}
                  <i className="mdi mdi-chevron-right ms-1"></i>
                </Link>
              </div>
            </div>

            {/* <div className="lg:ms-8">
              <div className="relative">
                <Image
                  src="/images/design-team.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="relative top-16"
                  alt=""
                />
                <div className="absolute bottom-1/2 start-1/2 -z-1 size-[400px] translate-y-1/2 overflow-hidden rounded-full bg-gradient-to-tl from-gray-500 via-gray-500/70 to-gray-500/20 shadow-md shadow-gray-500/10 md:start-0 md:size-[500px] ltr:-translate-x-1/2 ltr:md:translate-x-0 rtl:translate-x-1/2 rtl:md:translate-x-0"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Purpose />

      <Focus />

      <FocusCarousel />

      <WhatWeDo />

      <Overview />

      <Newsletter />
    </>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
