  import { IProduct } from "../../model/interfaces";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
import { getProductsById } from "../../service/productService";

  const Product = () => {
    const [product, setProduct] = useState<IProduct>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
      getProductsById(id).then((product) => setProduct(product as IProduct));
    }, [id]);

    return (
      <>
        <h1>{product?.name}</h1>
        <p>{product?.price}</p>
        <img src={product?.image[0].url} alt={product?.name} />
        <h2>{product?.description}</h2>
      </>
    );
  };

  export default Product;
