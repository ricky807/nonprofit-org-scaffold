import React from "react";

import { graphql } from "gatsby";

import * as styles from "../../styles/pages/Blog.module.css";
import Banner from "../../components/Global/Banner";
import ProgressBar from "../../components/Global/ProgressBar";

import styled from "styled-components";
import useScrollPercent from "../../utils/hooks/useScrollPercent";

const PostTemplate = ({ data }) => {
  const percent = useScrollPercent();

  const overlay = data["post"]["ACF_POSTS"]?.overlay;

  const featuredImage = data.post?.featuredImage?.node?.sourceUrl;

  return (
    <div>
      <ProgessContainer>
        <ProgressBar completed={percent} bgcolor="lightpurple" />
      </ProgessContainer>

      {featuredImage && (
        <Banner
          height={"50vh"}
          backgroundColor={overlay}
          backgroundImage={featuredImage}
        ></Banner>
      )}
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
    </div>
  );
};

export default PostTemplate;

const ProgessContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

export const pageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      ACF_POSTS {
        overlay
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
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
