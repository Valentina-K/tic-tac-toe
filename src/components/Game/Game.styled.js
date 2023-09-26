import styled from "styled-components";
export const ButtonPlay = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: inherit;
  width: 64px;
  height: 64px;
  cursor: pointer;
  & svg {
    width: 56px;
    height: 56px;
  }
  & svg:hover {
    fill: blueviolet;
  }
`;

export const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  border: none;
  box-shadow: 1px 1px 9px 7px rgba(75, 0, 130, 0.5);
  background-color: inherit;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #e6e6fa;
    box-shadow: 1px 1px 9px 7px rgba(75, 0, 130, 0.5) inset;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
