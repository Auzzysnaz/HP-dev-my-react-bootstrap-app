import React from "react";
import product from "./product";

export default function Price() {
  // Format as currency
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return <span>{price}</span>;
}
