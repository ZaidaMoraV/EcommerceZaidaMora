import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from "./CartWidget";

const categories = [{
  key: 1,
  categoryId: "MLC1196",
  name: "Libros"
}, {
  key: 2,
  categoryId: "MLC3043",
  name: "Comics"
}];

export const NavbarComponent = () => {

  return (
    <Container fluid="md">
      <h3 md="auto">El Rincón de la lectura</h3>

      <Nav justify variant="tabs" defaultActiveKey="/">
        <Link to={"/"}><img alt="" src="/images/libros.jpg" width="100" height="100" /></Link>
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Quienes somos</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          {
            categories.map( category =>
              <NavDropdown.Item href={`/category/${category.categoryId}`}>
                <p>{category.name}</p>
              </NavDropdown.Item>
            )
          }
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled> </Nav.Link>
          <Link to={"/cart"}><CartWidget /> </Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}