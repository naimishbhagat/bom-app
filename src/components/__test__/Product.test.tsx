import React from "react";
import { render, cleanup, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../Product";
const saleProductData = {
  index: 6,
  isSale: true,
  price: "$69.99",
  productImage: "Product_7.jpeg",
  productName: "Grey Goose Orginal 10x12x50ml",
  type: "Spirits",
};

const productData = {
  index: 6,
  isSale: false,
  price: "$69.99",
  productImage: "Product_7.jpeg",
  productName: "Grey Goose Orginal 10x12x50ml",
  type: "Spirits",
};
afterEach(() => {
  cleanup;
});

test("renders product correctly", async () => {
  await act(async () => {
    const { getByText } = render(<Product product={productData} />);
    await waitFor(() => [
      expect(getByText(/Grey Goose Orginal 10x12x50ml/)).toBeInTheDocument(),
    ]);
  });
});
test("renders product show sale label", async () => {
  await act(async () => {
    const { getByText } = render(<Product product={saleProductData} />);
    await waitFor(() => [expect(getByText(/sale/)).toBeInTheDocument()]);
  });
});
