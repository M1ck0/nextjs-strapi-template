import React from "react";

import style from "./post.module.scss";

const Post = ({ data }) => {
  return (
    <div className={style.post}>
      <img
        src={`http://localhost:1337${data?.cover?.url}`}
        alt=""
        className={style.image}
      />
      <h1>{data.title}</h1>
      <h4>{data?.text}</h4>
    </div>
  );
};

export async function getServerSideProps(context) {
  const postId = context?.query?.id;

  const res = await fetch(`http://localhost:1337/posts/${postId}`);

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Post;
