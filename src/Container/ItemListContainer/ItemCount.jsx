import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemCount = ({ item, id, Resta, Suma, contador }) => {
    const [contar, setContar] = useState(false);



    function addItem( item, contador, id){

        setContar(true);
    }

    return (
        <>
            <div>
                <Button variant="primary" size="lg" onClick={ Suma} >Agregar</Button>
                <h3>{contador}</h3>
                <Button variant="secondary" size="lg" onClick={Resta}>Eliminar</Button>
            </div>
            {!contar ? 
            <div>
                <Button variant="secondary" size="lg" onClick={() => addItem(item, contador, id)}>
                    <h3>Agregar al carrito</h3>
                </Button>
            </div> :
            <div>
                <Link to={"/cart"}>
                    <Button variant="secondary" size="lg">
                        <h3>Terminar compra</h3>
                    </Button>
                </Link>
            </div>}
        </>
    )
}

export default ItemCount
