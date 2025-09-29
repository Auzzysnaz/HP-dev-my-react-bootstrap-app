import React from "react";
import { Container, Card } from "react-bootstrap";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import product from "./product";

// Provide your first name here; leave "" to test the fallback
const firstName = "Augustine"; // e.g., "" if not provided

export default function App() {
  const hasName = firstName && firstName.trim().length > 0;

  return (
    <>
      <div className="App">
        <Container className="py-4">
          <Card className="shadow-sm">
            <Image />

            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span><Name /></span>
                <strong><Price /></strong>
              </Card.Title>

              <Card.Text>
                <Description />
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Greeting & conditional image */}
          <div className="text-center mt-4">
            <h5>
              Hello, {hasName ? firstName : "there!"}
            </h5>

            {hasName && (
              <img
                src={`https://i.pravatar.cc/100?u=${encodeURIComponent(firstName)}`}
                alt={`${firstName}'s avatar`}
                width="80"
                height="80"
                style={{ borderRadius: "50%", marginTop: 8 }}
              />
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
