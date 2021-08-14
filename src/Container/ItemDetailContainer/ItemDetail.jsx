import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ItemCount } from '../../Components/ItemCount';

export const ItemDetail = ( props ) => {
  const initial = 1;
  const [cantSel, setCantSel] = useState(initial);
  const item = {
    id: props.id,
    title: props.item.title,
    category: props.item.category,
    description: props.item.description,
    imageUrl: props.item.thumbnail,
    stock: props.item.available_quantity,
    price: props.item.price
  };

  function add(p) {
    if (cantSel < item.stock) {
      setCantSel(cantSel + 1);
    } else {
      setCantSel(item.stock);
    }
  }

  function subtract(p) {
    if (cantSel > initial) {
      setCantSel(cantSel - 1);
    } else {
      setCantSel(initial);
    }
  }

  return (
    <Card style={{ width: '40rem' }}>
      <Card.Header>{item.title}</Card.Header>
      <Card.Img src={item.imageUrl} fluid />
      <Card.Body>
        <Card.Text>Precio: {item.price}</Card.Text>
        <ItemCount min="0" max={item.stock} value={cantSel} funResta={add} funSuma={subtract} />
        <Link to={"/item"}>Agregar al carrito</Link>
      </Card.Body>
    </Card>
  )
}
