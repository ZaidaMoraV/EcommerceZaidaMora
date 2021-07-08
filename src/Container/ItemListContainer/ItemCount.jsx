import { useState } from "react";
import { Button } from "react-bootstrap";
import { Item } from "./Item";


export const ItemCount = () => {
    console.log('---> Into ItemCount');
    const [contador, setContador] = useState(0);

    // ValidarContador
    function validarSuma() {
        if (contador < 5) {
            setContador(contador + 1);
        }
    }
    function validarResta() {
        if (contador >= 1) {
            setContador(contador - 1);
        }
    }

    
    return (

        <>
            <section>
                <Item />
                <Button variant="primary" size="lg" onClick={() => { validarSuma() }}>Agregar</Button>
                {contador}
                <Button variant="secondary" size="lg" onClick={() => { validarResta() }}>Eliminar</Button>
            </section>
        </>
    )
}


