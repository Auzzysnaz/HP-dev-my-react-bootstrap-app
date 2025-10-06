// src/PlayersList.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import players from "./players";

export default function PlayersList() {
  return (
    <Container className="py-4">
      <h2 className="mb-4">FIFA Player Cards</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {players.map((p, idx) => (
          <Col key={idx}>
            {/* Spread props into Player as requested */}
            <Player {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
