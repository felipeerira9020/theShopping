/* eslint-disable react-hooks/exhaustive-deps */
import { getProducts } from "../../service/productService";
import { IProduct, IProductResponse } from "../../model/interfaces";
import { useEffect, FunctionComponent } from "react";
import {
  ButtonLink,
  Container,
  ContainerTransparent,
  Content,
  Image,
  Parragraph,
  Price,
  ProductContainer,
  Send,
} from "./CardProduct.styled";
import { SlEnergy } from "react-icons/sl";

const CardProduct: FunctionComponent<IProductResponse> = ({
  product,
  setProduct,
}) => {
  useEffect(() => {
    getProducts().then((product) =>
      setProduct(product as unknown as IProduct[])
    );
  }, []);

  return (
    <Container>
      {product.map((product: any) => {
        return (
          <ButtonLink to={`/product/${product.id}`}>
            <ContainerTransparent>
              <ProductContainer key={product.id}>
                <Image src={product.image[0].url} alt={product.name} />
                <Content>
                  <Price>$ {product.price}</Price>
                  <Send>{product.available ? "Envío gratis" : <>Envío gratis <SlEnergy className="energy"/> <span>FULL </span> </>}
                  </Send>
                  <Parragraph>{product.name}</Parragraph>
                </Content>
              </ProductContainer>
            </ContainerTransparent>
          </ButtonLink>
        );
      })}
    </Container>
  );
};

export default CardProduct;
