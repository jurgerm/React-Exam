import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  width: 150px;
  background-color: ${(props) =>
    props.primary ? '#f0f0f0' : props.secondary ? '#4F70B5' : '#f0f0f0'};
  color: ${(props) =>
    props.primary ? '#000' : props.secondary ? '#fff' : '#000'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;