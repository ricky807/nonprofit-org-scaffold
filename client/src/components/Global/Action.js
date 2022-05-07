import React from "react";

import styled from "styled-components";
import translateColors from "../../utils/translateColors";
import Button from "./Button";

export default function Action({
  heading,
  subheading,
  btnText,
  color,
  onClick,
}) {
  const translatedColor = translateColors(color);

  const buttonless = !btnText;

  return (
    <Wrapper backgroundColor={translatedColor} buttonless={buttonless}>
      <h2 onClick={onClick}>{heading}</h2>

      <p>{subheading}</p>

      {btnText && <Button onClick={onClick}>{btnText}</Button>}
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

  ${(props) =>
    props.buttonless &&
    `
        h2 {
            text-decoration: underline;
            cursor: pointer;
        }
    `}
`;
