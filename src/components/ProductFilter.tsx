import React from "react";

function ProductFilter({ handleChange }) {
  return (
    <div data-testid="productFilter" className="productFilter">
      <label htmlFor="filter">Filter By </label>
      <select id="filter" onChange={handleChange}>
        <option value="">All</option>
        <option value="Beer">Beer</option>
        <option value="Cider">Cider</option>
        <option value="Spirits">Spirits</option>
        <option value="Wine">Wine</option>
      </select>
    </div>
  );
}

export default ProductFilter;
