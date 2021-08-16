import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartItem } from "../Components/CartItem";
import { CartContext } from "../Context/CartContext";

export function Cart() {
    const { cart, total, clearCart } = useContext(CartContext);
    console.log(cart);

    return (
        <div>
            {
                cart.length > 0 ?
                (<h1>Detalle del carrito!</h1>)
                :
                (
                    <div>
                        <h1>Carrito vacio!</h1>
                        <Link to={"/"}>
                            <Button variant="primary" onClick={ () => { clearCart() }}>Volver</Button>
                        </Link>
                    </div>
                )
            }
            {
                cart.map(product => {
                    return (
                        <CartItem key={product.id} id={product.id} title={product.title} imageUrl={product.imageUrl}
                            price={product.price} amount={product.amount} />
                    );
                })
            }

            {
                cart.length > 0 &&
                <Container>
                    <Row>
                        <Col md={{ offset: 8 }}>Total:</Col>
                        <Col>$ {total}</Col>
                    </Row>
                </Container>
            }

        </div>
    )

}