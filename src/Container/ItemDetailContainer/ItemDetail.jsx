import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemListContainer/ItemCount';
import { useState } from "react";

export const ItemDetail = ({ key, name, price, img, id, stock, item }) => {

  const [contador, setContador] = useState(0);

  function add() {
    if ( contador < stock){
      setContador(contador+1)
    }
  }

  // ValidarContador
  function Suma() {
    if (contador < 5) {
        setContador(contador + 1);
    }
}
function Resta() {
    if (contador > 1) {
        setContador(contador - 1);
    }
}

  return (
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price} Ver producto
        </Card.Text>
        <Link to={"/item"}>ver mas</Link>
      </Card.Body>
      <ItemCount Suma={Suma} Resta ={Resta} item={item} contador={contador} id={id} stock={stock} add={add}/>
    </Card>
    
  )
}
 export default ItemDetail