"use client";

import { add } from "@/redux/CartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const responsive = await fetch("https://fakestoreapi.com/products");
    const data = await responsive.json();
    setProducts(data);
  };

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productWrapper">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
