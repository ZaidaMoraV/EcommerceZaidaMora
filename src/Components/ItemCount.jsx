import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const ItemCount = ({ min = 0, max, value = 0, funResta, funSuma }) => {
    const [contador, setContador] = useState(value);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={(p) => { funResta(p); setContador(contador - 1) }} disabled={contador <= min}>
                            Eliminar
                        </Button>
                    </Col>
                    <Col m={5}><span>{contador}</span></Col>
                    <Col>
                        <Button variant="primary" size="lg" onClick={(p) => { funSuma(p); setContador(contador + 1) }} disabled={contador >= max}>
                            Agregar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
