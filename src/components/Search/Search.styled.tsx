import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 40px;
`;

export const Button = styled.button`
  background-color: var(--color-blue);
  color: white;
  border: none;
  border-radius: 3px 0px 0px 3px;
  font-size: 16px;
  width: 30%;
  transition: 240ms;
  .cleanUp{
    background-color: var(--color-blue);
  }
  &:hover {
    background-color: #126ce0;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 65%;
  height: 40px;
  border: none;
  outline: none;
  ::placeholder {
    color: #8a8585be;
    padding-left: 10px;
    font-size: 14.2px;
  }
`;
