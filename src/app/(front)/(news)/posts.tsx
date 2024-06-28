import React from "react";

import { Post } from "./post";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { client } from "@/../sanity/lib/client";

import type { PostPreview } from "./types";
const getPosts = async () => {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))]{
    _id,
    _updatedAt,
    title,
    slug,
    author,
    mainImage,
    categories,
    "previewText": body[0].children[0].text,
  }`;
  // eslint-disable-next-line
  const posts = await client.fetch(query);
  // eslint-disable-next-line
  return posts;
};

export const Posts = async () => {
  // eslint-disable-next-line
  const posts: PostPreview[] = await getPosts(); //: PostPreview[]
  return (
    <MaxWidthWrapper className="my-12">
      {/* <div className="grid grid-cols-1 place-items-center gap-x-3 gap-y-6 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-36"> */}
      <div className="grid grid-cols-1 place-items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-24">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
