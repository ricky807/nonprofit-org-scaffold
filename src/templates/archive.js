import React from "react";
import { Link, graphql } from "gatsby";

import * as styles from "../styles/pages/Blogs.module.css";

export default function archiveTemplate({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.pageContent}>
          {allWpPost.edges.map((post) => (
            <article key={post.node.id} className="entry-content">
              <Link to={`/blog/${post.node.slug}`}>
                <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              </Link>
              <div
                className={styles.date}
                dangerouslySetInnerHTML={{ __html: post.node.date }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <Link className={styles.readMore} to={`/blog/${post.node.slug}`}>
                Read
              </Link>
              <div className="dot-divider" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`;
