import { Container, HeaderContainer, Shopping, Title } from "./Header.styled";
import { FaShopify } from "react-icons/fa";
import Search from "../Search/Search";
import { FunctionComponent } from "react";
import { IProductResponse } from "../../model/interfaces";

const Header: FunctionComponent<IProductResponse> = ({ setProduct }) => {
  return (
    <Container>
      <HeaderContainer>
        <>
          <Shopping>
            <FaShopify className="shopping" />
            <Title>
              the <br />
              shopping
            </Title>
          </Shopping>
        </>
        <Search setProduct={setProduct} />
        <>
          <button>Crear Cuenta</button>
        </>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
