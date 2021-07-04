import { CartWidget } from "./CartWidget";

export const NavbarComponent = () => {

  return (
    <div>
      <body>
        <litle> El Rincón de la lectura </litle>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img alt="" src="/images/libros.jpg" width="100" height="100" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <p className="nav-link" >Inicio <span className="sr-only"></span></p>
              </li>
              <li className="nav-item">
                <p className="nav-link" >Características</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" >Precios</p>
              </li>
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Listado
                </p>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <p className="dropdown-item">Historia</p>
                  <p className="dropdown-item">Literatura</p>
                  <p className="dropdown-item">Mundo</p>
                </div>
              </li>
              <CartWidget />
           </ul>
          </div>
        </nav>
      </body>
    </div>
  )
}