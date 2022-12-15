import { FunctionComponent, useState } from "react";
import { IProduct, IProductResponse } from "../../model/interfaces";
import { getProducts, getProductsByName } from "../../service/productService";
import { Button, Container, Form, Input } from "./Search.styled";

const Search: FunctionComponent<IProductResponse> = ({ setProduct }) => {
  const [name, setName] = useState<string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [onSubmit, setOnSubmit] = useState<boolean>(true);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getProductsByName(name).then((product) =>
      setProduct(product as unknown as IProduct[])
    );
    if (name.length > 1) {
      setOnSubmit(false);
    }
  };
  const handleOnClear = () => {
    getProducts().then((product) =>
      setProduct(product as unknown as IProduct[])
    );
    setOnSubmit(true);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit ? handleOnSubmit : handleOnClear}>
        <Input type="text" value={name} onChange={handleOnChange} placeholder="Buscar productos, marcas y más..." />
        <Button type="submit">{onSubmit ? "Buscar" : "Limpiar "}</Button>
      </Form>
    </Container>
  );
};

export default Search;
