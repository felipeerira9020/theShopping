import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  background-color: var(--color-primary);
  height: 100px;
  width: 70em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Shopping = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: var(--color-primary);

  .shopping {
    background-color: var(--color-primary);
    color: #082e66;
    font-size: 50px;
  }
`;
export const Title = styled.h1`
  background-color: var(--color-primary);
  font-size: 18px;
  color: #082e66;
  font-weight: bold;
  text-shadow: 1px 1px 1px #082e66;
`;
