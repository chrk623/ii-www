import Cover from "~/components/pages/home/cover";
import Purpose from "~/components/pages/home/purpose";
import Focus from "~/components/pages/home/focus";
import FocusCarousel from "~/components/pages/home/focus-carousel";
import WhatWeDo from "~/components/pages/home/what-we-do";
import Overview from "~/components/pages/home/overview";
import Newsletter from "~/components/pages/home/newsletter";
// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";

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
