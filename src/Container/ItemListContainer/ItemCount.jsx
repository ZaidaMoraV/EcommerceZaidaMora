import { useState } from "react";
import { Button } from "react-bootstrap";
import { Item } from "./Item";


export const ItemCount = () => {
    const [contador, setContador] = useState(0);

    // ValidarContador
    function validarContador() {
        if ( contador <5 ){
            setContador(contador+1);
        }
    }


    return (
        <>
            <section>
                <Item/>
                <Button id="agregar" variant="primary" size="lg"  onClick={() => { validarContador()}}>Agregar</Button>
                {contador}
                <Button variant="secondary" size="lg" block onClick={() => { setContador(contador-1)}}>Eliminar</Button>
            </section>
        </>
    )
}


