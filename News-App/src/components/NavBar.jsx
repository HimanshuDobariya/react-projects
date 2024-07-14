import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
const NavBar = ({ setCategory }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Badge bg="light" className="text-dark fs-4">
              Daily News
            </Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light">
              <Nav.Link
                onClick={() => {
                  setCategory("technology");
                }}
              >
                Technology
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCategory("business");
                }}
              >
                business
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCategory("health");
                }}
              >
                health
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCategory("science");
                }}
              >
                science
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCategory("sports");
                }}
              >
                sports
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCategory("entertainment");
                }}
              >
                entertainment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
