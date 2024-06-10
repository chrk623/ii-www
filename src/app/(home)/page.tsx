import React from "react";

import HomeCover from "./home-cover";
import HomeFocus from "./home-focus";
import HomePurpose from "./home-purpose";
import HomeFocusCarousel from "./home-focus-carousel";
import HomeWhatWeDo from "./home-what-we-do";
import HomeOverview from "./home-overview";
import HomeNewsletter from "./home-newsletter";

export default function Home() {
  return (
    <>
      <HomeCover />

      <HomePurpose />

      <HomeFocus />

      <HomeFocusCarousel />

      <HomeWhatWeDo />

      <HomeOverview />

      <HomeNewsletter />
    </>
  );
}
