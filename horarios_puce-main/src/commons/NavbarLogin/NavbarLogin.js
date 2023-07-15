import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarLoginCss.css";

function NavbarLogin() {
  return (
    <Navbar id="navbar2" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            id="logopuceimg"
            src="https://www.puce.edu.ec/wp-content/uploads/2022/08/logo-puce-nuevo.png"
            height="40"
            className="d-inline-block align-top"
            alt="Logo PUCE"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-success">Iniciar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
