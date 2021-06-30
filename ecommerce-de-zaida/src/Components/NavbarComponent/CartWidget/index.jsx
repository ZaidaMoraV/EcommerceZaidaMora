import { NavbarComponent } from "../Navbar"


export const CartWidget = () => {

  const carrito = [];
    return (
    <div>
      <NavbarComponent cart={carrito}/>
  </div>  
)
}
