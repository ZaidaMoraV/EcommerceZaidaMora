import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ItemCount } from '../../Components/ItemCount';
import '../../css/ItemDetail.css';

export const ItemDetail = (props) => {
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
    <div className="detail">
      <Card className="cart">
        <Card.Header>{item.title}</Card.Header>
        <Card.Img className="img" src={item.imageUrl} />
        <Card.Body>
          <Card.Text>Precio: {item.price}</Card.Text>
          <ItemCount min="0" max={item.stock} value={cantSel} funResta={add} funSuma={subtract} />
          <Link to={"/item"}>
            <Button variant="secondary" size="md">Agregar al carrito</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
