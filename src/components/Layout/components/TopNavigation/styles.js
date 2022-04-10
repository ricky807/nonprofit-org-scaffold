import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.darkpurple};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const MenuItem = styled.li`
  list-style-type: none;
  color: white;
  margin-right: 1rem;
  font-size: smaller;

  cursor: pointer;

  padding: 5px 10px 5px 10px;

  transition: 0.2s ease-in-out;

  :hover {
      background-color: ${props => props.theme.lightpurple};
  }


`;
