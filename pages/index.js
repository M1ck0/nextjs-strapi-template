import React from "react";

import PostCard from "@/components/post-card";

const Index = ({ data }) => {
  return (
    <div>
      {data?.map((elem, idx) => (
        <PostCard data={elem} key={idx} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/posts");

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Index;
