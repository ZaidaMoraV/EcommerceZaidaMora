import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { ItemCount } from '../../Components/ItemCount';
import '../../css/ItemDetail.css';
import { CartContext } from '../../Context/CartContext';

export const ItemDetail = (props) => {
  const initial = 1;
  const [cantSel, setCantSel] = useState(initial);
  const context = useContext(CartContext);
  console.log("id detail : " + props.item.id);

  const item = {
    id: props.item.id,
    title: props.item.title,
    category: props.item.category_id,
    description: props.item.title,
    imageUrl: props.item.thumbnail,
    stock: props.item.stock,
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

  function onAddToCart(id, item, cantSel) {
    console.log(id, item, cantSel);
    context.addItem(id, item, cantSel);
  }

  return (
    <div className="detail">
      <Card className="cartDetail">
        <Card.Header>{item.title}</Card.Header>
        <Card.Img className="imageDetail" src={item.imageUrl} />
        <Card.Body>
          <Card.Text>Stock: {item.stock}</Card.Text>
          <Card.Text>Precio: {item.price}</Card.Text>
          <ItemCount min="0" max={item.stock} value={cantSel} funResta={subtract} funSuma={add} />
          <br></br>
          <Row>
            <Col>
              <Button variant="secondary" size="lg" onClick={(p) => { onAddToCart(item.id, item, cantSel) }}>Agregar al carrito</Button>
            </Col>
            <Col>
              <Link to={"/cart"}>
                <Button variant="secondary" size="lg" >Terminar la compra</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
