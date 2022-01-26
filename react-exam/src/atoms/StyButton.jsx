import styled from "styled-components";

export const StyButton = styled.button`
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: var(--main-color);
  color: var(--main-color-contrast);
  border: solid var(--main-color) 1px;
  border-radius: 5px;
  &:hover{
    background-color: var(--main-color-inverted);
    color: var(--main-color);
    border-color: var(--main-color);
  } 
`