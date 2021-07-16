import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


const categories = [{
  categoryId: "libros",
  name: "LIBROS"
}, {

  categoryId: "catalogos",
  name: "CATALOGOS"
}
]

export const NavbarComponent = () => {
  console.log('Into Navbar');

  return (

    <Nav justify variant="tabs" defaultActiveKey="/">
      <Link to={"/"}><img alt="" src="/images/libros.jpg" width="100" height="100" /></Link>
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Quienes somos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Autores</Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
      {
        categories.map(category =>
          <Nav.Item>
          <Link to={`/category/${category.categoryId}`}>
            <p>{category.name}</p>
          </Link>
          </Nav.Item>)}
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Carrito
        </Nav.Link>
          <CartWidget />
      </Nav.Item>
    </Nav>
  )
}