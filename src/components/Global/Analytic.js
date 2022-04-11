import React from "react";
import styled from "styled-components";

export default function Analytic({ children, statistic, description }) {
  return (
    <Wrapper>
      <div className="circle">
        <div className="icon">{children}</div>
        <h2>{statistic}</h2>
      </div>
      <p>{description}</p>
    </Wrapper>
  );
}

export const Analytics = styled.section`
  text-align: center;

  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  color: white;

  background-color: purple;

  @media (max-width: 1200px) {
    width: 85%;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .circle {
    position: relative;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.39);

    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    flex-direction: column;

    padding: 2px;
  }

  .icon {
    position: relative;
    bottom: 20px;
  }
`;


