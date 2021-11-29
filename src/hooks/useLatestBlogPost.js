import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
            slug
          }
        }
      }
    }
  `);

  return data.allWpPost.edges[0].node
};
