import { useState } from "react";
import { Button } from "react-bootstrap";
import { ItemCount } from "../../Components/ButtonComponent/ItemCount";

export const HomeContainer = () => {
    const [contador, setContador] = useState(0);

    return (
        <>
            <section>
                <ItemCount name={'El Pollito Pepe'} />
                <Button variant="primary" size="lg"  onClick={() => { setContador(contador+1)}}>Agregar</Button>
                {contador}
                <h2> </h2>
                <Button variant="secondary" size="lg" block onClick={() => { setContador(contador-1)}}>Eliminar</Button>
            </section>
        </>
    )
}


