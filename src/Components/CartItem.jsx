import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

export function CartItem({ id, title, imageUrl, price, amount }) {
    const { removeItem } = useContext(CartContext);

    return (
        <div>
            <Container>
                <Row>
                    <Col><img src={imageUrl} alt="" /></Col>
                    <Col>{title}</Col>
                    <Col>$ {price}</Col>
                    <Col>Cant: {amount}</Col>
                    <Col>
                        <Button variant="primary" onClick={ () => { removeItem(id) }}>Eliminar</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}