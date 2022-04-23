import React from "react";
import { Link, graphql, navigate } from "gatsby";

import * as styles from "../styles/pages/Blogs.module.css";
import Banner from "../components/Global/Banner";

import styled from "styled-components";

import { Card } from "react-bootstrap";

import placeholder from '../images/blog/placeholder.webp'

export default function archiveTemplate({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) {
  return (
    <div>
      <Banner
        backgroundImage={
          "http://3.230.120.77/wp-content/uploads/2022/04/third.webp"
        }
        backgroundColor="darkblue"
        height={"50vh"}
      ></Banner>

      <div className={styles.wrapper}>
        <Text>
          <hr />
          Recent Stories
          <hr />
        </Text>

        <div className={styles.contentWrapper}>
          <div className={styles.pageContent}>
            <Articles>
              {allWpPost.edges.map((post) => (
                // <article key={post.node.id} className="entry-content">
                //   <Link to={`/blog/${post.node.slug}`}>
                //     <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                //   </Link>
                //   <div
                //     className={styles.date}
                //     dangerouslySetInnerHTML={{ __html: post.node.date }}
                //   />
                //   <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                //   <Link
                //     className={styles.readMore}
                //     to={`/blog/${post.node.slug}`}
                //   >
                //     Read
                //   </Link>
                //   <div className="dot-divider" />
                // </article>

                <Article {...post.node} />
              ))}
            </Articles>
          </div>
        </div>
      </div>
    </div>
  );
}

const Articles = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  grid-gap: 1rem;

  @media screen and (max-width: 1158px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Article = ({ title, excerpt, featuredImage, date, author, slug }) => {
  return (
    <Card
      onClick={() => navigate(`/story/${slug}`)}
      style={{ width: "100%", cursor: "pointer" }}
    >
      <Card.Img
        style={{ width: "100%", minHeight: "250px" }}
        src={featuredImage?.node?.sourceUrl || placeholder}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>
            {author.node.name} | {date}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Text = styled.h1`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.darkblue};
`;

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
          author {
            node {
              name
            }
          }
          excerpt
          uri
          slug
          date(formatString: "MM / DD / YYYY")
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
