import { useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import Header from "../../components/Header/Header";
import { IProduct } from "../../model/interfaces";

const Home = () => {
     const [product, setProduct] = useState<IProduct[]>([]);

  return <div>
    <Header setProduct={setProduct}/>
    <CardProduct product={product} setProduct={setProduct}/>

  </div>;
};

export default Home;
