import React from "react";
import { render, cleanup, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductFilter from "../ProductFilter";

afterEach(() => {
  cleanup;
});

const handleChange = jest.fn();

test("renders product filter correctly", async () => {
  await act(async () => {
    const { getByTestId } = render(
      <ProductFilter handleChange={handleChange} />
    );
    await waitFor(() => [
      expect(getByTestId("productFilter")).toBeInTheDocument(),
    ]);
  });
});
