import React from "react";

import HomeCover from "@/components/pages/home/HomeCover";
import Purpose from "@/components/pages/home/Purpose";
import Focus from "@/components/pages/home/Focus";
import FocusCarousel from "@/components/pages/home/FocusCarousel";
import WhatWeDo from "@/components/pages/home/WhatWeDo";
import Overview from "@/components/pages/home/Overview";
import Newsletter from "@/components/pages/home/NewsLetter";

export default async function Home() {
  //   const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <HomeCover />

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
