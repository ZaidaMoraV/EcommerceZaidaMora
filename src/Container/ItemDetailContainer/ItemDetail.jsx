import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { ItemCount } from '../../Components/ItemCount';
import '../../css/ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = (props) => {
  const initial = 1;
  const [cantSel, setCantSel] = useState(initial);
  const context = useContext(CartContext);

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

  function onAddToCart(id, item, cantSel){
    context.addItem(id, item, cantSel);
  }

  return (
    <div className="detail">
      <Card className="cartDetail">
        <Card.Header>{item.title}</Card.Header>
        <Card.Img className="imageDetail" src={item.imageUrl} />
        <Card.Body>
          <Card.Text>Precio: {item.price}</Card.Text>
          <ItemCount min="0" max={item.stock} value={cantSel} funResta={add} funSuma={subtract} />
          <Link to={"/item"}>
            <Button variant="secondary" size="md" onClick={(p) => { onAddToCart(item.id, item, cantSel) }}>
              Agregar al carrito</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
