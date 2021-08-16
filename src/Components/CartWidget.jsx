import { useContext } from "react"
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

export const CartWidget = () => {

  const { quantity } = useContext(CartContext);

  return (
    <>
      <Button variant="icon-btn">
        <img src="/images/carrito.png" width="25" height="25" alt="" />
        <span>{ quantity > 0 ? quantity : 0 }</span>
      </Button>
    </>
  )
}
