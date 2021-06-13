import React from "react";

import Link from "next/link";

import style from "./post-card.module.scss";

const PostCard = ({ data }) => {
  console.log(data);
  return (
    <Link href={`/post/${data?.id}`} passHref>
      <a className={style.card}>
        <img
          src={`http://localhost:1337${data?.cover?.url}`}
          alt=""
          className={style.image}
        />
        <p className={style.title}>{data?.title}</p>
        <p className={style.description}>{data?.text}</p>
      </a>
    </Link>
  );
};

export default PostCard;
