import React from "react";

import styled from "styled-components";
import translateColors from "../../utils/translateColors";
import Button from "./Button";

export default function Action({
  heading,
  subheading,
  btnText,
  color,
  onClick
}) {
  const translatedColor = translateColors(color);

  return (
    <Wrapper backgroundColor={translatedColor}>
      <h2>{heading}</h2>

      <p>{subheading}</p>

      <Button onClick={onClick}>{btnText}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};

  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  color: white;

  font-weight: bolder;

  padding: 3rem;

  text-align: center;
`;
