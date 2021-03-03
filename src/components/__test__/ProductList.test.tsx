import React from "react";
import { render, cleanup, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "../ProductList";
const productData = [
  {
    index: 0,
    isSale: false,
    price: "$49.99",
    productImage: "Product_1.jpeg",
    productName: "Pure Blonde Crate",
    type: "Beer",
  },
  {
    index: 1,
    isSale: true,
    price: "$14.99",
    productImage: "Product_2.jpeg",
    productName: "Victoria Bitter 4x6x375ml",
    type: "Beer",
  },
];
afterEach(() => {
  cleanup;
});
const handleChange = jest.fn();
test("renders products correctly", async () => {
  await act(async () => {
    const { getByTestId } = render(
      <ProductList products={productData} change={handleChange} />
    );
    await waitFor(() => [
      expect(getByTestId("productList")).toBeInTheDocument(),
    ]);
  });
});
