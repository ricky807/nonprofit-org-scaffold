import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { useSliderQuery } from "../../hooks/useSliderQuery";

// styles
import * as styles from "../../styles/pages/Home.module.css";

import styled from "styled-components";

import Button from "../../components/Global/Button";
import Icon from "../../images/haplogoonly.webp";

function HeaderCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slides = useSliderQuery();

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {slides.map((slide, i) => {
        return (
          <Carousel.Item>
            <header>
              <img
                className={styles.headerImg}
                style={{
                  backgroundImage: `${generateGradiant(slide.overlay)} url(${
                    slide.background.sourceUrl
                  })`,
                }}
                // this is a blank gif image that allows the image and gradient in the 'style'
                src={styles.image}
              />
              <div className={styles.header}>
                <Carousel.Caption>
                  <div className={styles.headerContent}>
                    {/* {slide.icon && <img src={slide.icon} />} */}
                    <div className={styles.headerTitle}>
                      <h1>{slide.heading}</h1>
                      <p>{slide.subheading}</p>
                      <Buttons>
                        <RenderButtons btns={slide.buttons} />
                      </Buttons>
                    </div>
                  </div>
                </Carousel.Caption>
              </div>
            </header>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RenderButtons = ({ btns }) => {
  return btns.map((btn) => (
    <Button color={btn.color} onClick={() => window.open(btn.redirecturl)}>
      {btn.text}
    </Button>
  ));
};

const generateGradiant = (color) => {
  switch (color) {
    case "blue":
      return "linear-gradient(to right bottom, rgba(0, 68, 119, 0.4),  rgba(0, 68, 119, 0.4)),";

    case "white":
      return "linear-gradient(to right bottom, rgba(255, 255, 255, 0.6),  rgba(255, 255, 255, 0.6)),";

    case "purple":
      return "linear-gradient(to right bottom, rgba(141, 73, 130, 0.8),  rgba(141, 73, 130, 0.8)),";
    default:
      return "";
  }
};

export default HeaderCarousel;
