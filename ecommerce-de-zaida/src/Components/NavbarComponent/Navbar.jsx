export const NavbarComponent = ({cart}) => {
return (

  <body>
    <litle> El Rincón de la lectura </litle>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand"> <img src="/images/libros.jpg" width="100" height="100"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" >Inicio <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item">Action</a>
          <a className="dropdown-item">Another action</a>
          <a className="dropdown-item">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link">Carrito -{cart.length}<img src="/images/carrito.png" width="25" height="25"/></a>
      </li>
    </ul>
  </div>
</nav>
</body>
)}
