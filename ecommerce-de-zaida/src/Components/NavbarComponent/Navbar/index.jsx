export const NavbarComponent = () => {
  return (

    <body>
      <litle> El Rincón de la Lectura </litle>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-mark"> <img src="/images/libros.jpg" width="100" height="100" /> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria- extended="false" aria-label="alternative navigation ">
          <span className="navbar-toggler-icon"> </span>
        </ button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="active navigation element">
              <a className="nav-link"> Inicio <span className="sr-only"> (Actual)</span></a>
            </ li>
            <li className="nav-item">
              <a className="nav-link">Características</ a>
            </ li>
            <li className="nav-item">
              <a className="nav-link"> Precios </a>
            </ li>
            <li className="drop down menu of navigation elements">
              <a className="nav-link-dropdown toggle" ID="" navbarDropdownMenuLink roles="button" data toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Lista
              </a>
              <div className="drop-down-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="drop-down-element"> Economía </a>
                <a className="drop-down-element"> Historia </a>
                <a className="drop-down-element"> Literatura </a>
              </ div>
            </ li>
            <li className="nav-item">
              <a className="nav-link"> Carrito<img src="/images/carrito.png" width="25" height="25"></img></a>
            </ li>
          </ ul>
        </ div>
      </ nav>
    </ body>
  )
}