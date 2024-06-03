import React from "react";
import Link from "next/link";

import ImageCover from "@/components/common/ImageCover";
import { buttonVariants } from "@/components/ui/button";

const Cover = () => {
  return (
    <ImageCover
      title="A financial institution with a purpose"
      description="Integer Investments is dedicated to fostering positive change
within the property development ecosystem. We offer accessible,
tailored property development loans and invest directly in
affordable housing projects. Our regional knowledge and enthusiasm
drive economic growth, helping to rejuvenate and build communities
where it's needed most."
      imageUrl="/images/home/cover.jpg"
    >
      <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Link href="/products" className={buttonVariants()}>
          Explore Lending
        </Link>
        <Link href="/products" className={buttonVariants()}>
          Explore Our Investments
        </Link>
      </div>
    </ImageCover>
  );
};

export default Cover;
