import React from "react";
import product from "./product";
import { Card } from "react-bootstrap";

export default function Image() {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      style={{ objectFit: "cover", maxHeight: 240 }}
    />
  );
}
