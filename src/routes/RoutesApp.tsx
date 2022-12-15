import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
