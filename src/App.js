import React from 'react';
import { Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';

export default function App() {
  return (
    <>
      {/* React Fragment shorthand ^ groups without adding a DOM node */}
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
          <Container>
            <Navbar.Brand href="#">My React-Bootstrap App</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <h1 className="mb-4">Welcome to React Bootstrap 👋</h1>

          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is a simple card built with react-bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>
                    Use Row and Col to lay out responsive grids.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    Customize via Bootstrap utility classes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
