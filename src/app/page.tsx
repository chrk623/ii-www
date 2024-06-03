import React from "react";

import Cover from "@/components/home/Cover";
import Purpose from "@/components/home/Purpose";
import Focus from "@/components/home/Focus";
import FocusCarousel from "@/components/home/FocusCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";
import Overview from "@/components/home/Overview";
import Newsletter from "@/components/home/NewsLetter";

export default async function Home() {
  //   const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <Cover />

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
