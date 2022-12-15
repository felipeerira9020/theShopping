import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 80em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
  margin: 0 auto;
  padding: 40px 0px;
  flex-wrap: wrap;
  //todo ---revisar
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
    height: 100vh;
    padding-left: 10px;
  }
`;
export const ContainerTransparent = styled.div`
  width: 13.125em;
  height: 350px;
  background: transparent;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%);
  transition: 240ms;
  margin-bottom: 100px;
  z-index: 1;

  &:hover {
    height: auto;
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%), 0 -1px 20px 0 rgb(0 0 0 / 20%);

    p {
      display: block;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #fff;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
  position: relative;
`;

export const Parragraph = styled.p`
  display: none;
  background-color: #fff;
  color: var(--w-grey1);
  line-height: 1.29;
  font-weight: 400;
  font-size: 14px;
`;

export const Price = styled.p`
  background-color: #fff;
  padding-top: 10px;
  color: #333;
  font-size: 20px;
  line-height: 1.2;
`;
export const Send = styled.h3`
  background-color: #fff;
  color: #00a650;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  line-height: 30px;
  .energy{
    background-color: white;

  }
  span{
    font-style: italic;
    background-color: white;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;

  }
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;
