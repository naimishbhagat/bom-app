import React from "react";
import { productType } from "../App";
import Product from "./Product";
import "./product.css";
import ProductFilter from "./ProductFilter";
interface Props {
  products: productType[];
  change: any;
}
function ProductList({ products, change }: Props) {
  return (
    <>
      <ProductFilter handleChange={change} />
      <div data-testid="productList" className="productList">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
