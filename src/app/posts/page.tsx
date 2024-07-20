import React, { Suspense } from "react";
import { CardWrapper } from "../ui/postCard";
import Controls from "../ui/controls";
import Loader from "../ui/loader";

const Posts = async ({
  searchParams,
}: {
  searchParams?: {
    postId?: string;
  };
}) => {
  const id = Number(searchParams?.postId);
  console.log("The id is:" + id);

  return (
    <>
      <Controls />
      <Suspense fallback={<Loader />}>
        <CardWrapper id={id} />;
      </Suspense>
    </>
  );
};

export default Posts;
