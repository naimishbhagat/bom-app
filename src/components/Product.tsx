import React from "react";
import { productType } from "../App";
interface Props {
  product: productType;
}
function Product({ product }: Props) {
  return (
    <div className="product">
      {product.isSale ? <span>sale</span> : ""}
      <img src={`images/` + product.productImage} alt={product.productName} />
      <h3>
        {product.productName} {product.price}
      </h3>
    </div>
  );
}

export default Product;
