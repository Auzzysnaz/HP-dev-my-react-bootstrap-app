// src/Player.js
import React from "react";
import { Card, Badge } from "react-bootstrap";

// Inline styles (as requested)
const styles = {
  card: {
    width: "100%",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
    border: "1px solid #e5e7eb"
  },
  img: {
    height: 220,
    objectFit: "cover"
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
  meta: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8
  }
};

// Destructure with default props
export default function Player({
  name = "Unknown Player",
  team = "Free Agent",
  nationality = "N/A",
  jerseyNumber = 0,
  age = "—",
  imageUrl = "https://via.placeholder.com/400x300?text=Player"
}) {
  return (
    <Card style={styles.card} className="h-100">
      <Card.Img variant="top" src={imageUrl} alt={name} style={styles.img} />
      <Card.Body>
        <div style={styles.titleRow}>
          <Card.Title className="mb-1">{name}</Card.Title>
          <Badge bg="dark">#{jerseyNumber}</Badge>
        </div>
        <Card.Subtitle className="text-muted mb-3">{team}</Card.Subtitle>

        <div style={styles.meta}>
          <div><strong>Nation:</strong> {nationality}</div>
          <div><strong>Age:</strong> {age}</div>
        </div>
      </Card.Body>
    </Card>
  );
}
