import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: 'purple';

  flex-direction: ${props => props.column ? 'column': 'row'};
`;
