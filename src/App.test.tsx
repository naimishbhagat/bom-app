import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ProductList from "./components/ProductList";
import sampleProducts from "./data/products.json";
test("renders app ", () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter by/i);
  expect(linkElement).toBeInTheDocument();
});

const handleChange = jest.fn();

test("filter products", () => {
  render(<ProductList change={handleChange} products={sampleProducts} />);
  const filterTerm = "Beer";
  const filterData = sampleProducts.filter(
    (product) => product.type === filterTerm
  );
  expect(filterData.length).toBe(4);
});
