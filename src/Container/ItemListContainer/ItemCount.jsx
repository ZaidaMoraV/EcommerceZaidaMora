import { useState } from "react";
import { Button } from "react-bootstrap";
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ItemCount = ({ key, name, price, img, funcOnAdd }) => {
    console.log('---> Into ItemCount');
    const [contador, setContador] = useState(0);

    // ValidarContador
    function validarSuma() {
        if (contador < 5) {
            setContador(contador + 1);
        }
    }
    function validarResta() {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    function addItem(){
        console.log('Add to cart');
        funcOnAdd();
    }

    return (
        <>
            <div>
                <Item />
                <Button variant="primary" size="lg" onClick={() => { validarSuma() }} >Agregar</Button>
                <h3>{contador}</h3>
                <Button variant="secondary" size="lg" onClick={() => { validarResta() }}>Eliminar</Button>
            </div>

            <div>
                <Button variant="secondary" size="lg" onClick={() => addItem()}>
                    <h3>Agregar al carrito</h3>
                </Button>
            </div>
            <div>
                <Link to={"/cart"}>
                    <Button variant="secondary" size="lg">
                        <h3>Terminar compra</h3>
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default ItemCount
