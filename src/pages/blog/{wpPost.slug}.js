import React from "react";

import { graphql } from "gatsby";

import * as styles from "../../styles/pages/Blog.module.css";

const PostTemplate = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div
          date={data.post.date}
          author={data.post.author.node.name}
          categories={data.post.categories.nodes}
        />
        <article className={styles.postContent}>
          <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
        </article>
      </div>
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`;
