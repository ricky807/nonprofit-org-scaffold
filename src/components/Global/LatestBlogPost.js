import React from "react";

import parse from "html-react-parser";

import { Link } from "gatsby";

import { useLatestBlogPost } from "../../hooks/useLatestBlogPost";

import * as styles from "../../styles/Global/LatestBlogPost.module.css";

import * as globalStyles from "../../styles/Global/Global.module.css";

export default function LatestBlogPost() {
  const post = useLatestBlogPost();

  console.log(post);

  return (
    <div className={globalStyles.genericContainer}>
      <div className={styles.container}>
        <h1>Latest Blog Post</h1>
        <h2>{post.title}</h2>
        <p>{parse(post.excerpt)}</p>
        <Link to={`/blog/${post.slug}`}>Read more</Link>
      </div>
    </div>
  );
}
