import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import sampleProducts from "./data/products.json";
export interface productType {
  index: Number;
  isSale: Boolean;
  price: string;
  productImage: string;
  productName: string;
  type: string;
}
function App() {
  const [products, setProducts] = useState<productType[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setFilterTerm(e.target.value);
    console.log(filterTerm);
  };

  useEffect(() => {
    setProducts(sampleProducts);
    setLoading(false);
  }, []);

  const filteredProducts = filterTerm
    ? products.filter((product) => product.type === filterTerm)
    : products;

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <ProductList products={filteredProducts} change={handleChange} />
    </div>
  );
}

export default App;
