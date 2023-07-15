import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarHorariosCss.css";

function NavbarHorarios() {
  return (
    <Navbar id="navbar1" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.puce.edu.ec/wp-content/uploads/2022/08/logo-puce-nuevo.png"
            height="40"
            className="d-inline-block align-top"
            alt="Logo PUCE"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Bienvenid@ <a href="#login">Juan Pérez</a>
          </Navbar.Text>
          <Button variant="outline-success">Cerrar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHorarios;
