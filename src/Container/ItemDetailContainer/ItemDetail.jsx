import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemListContainer/ItemCount';
import { useState } from "react";

export const ItemDetail = ({ key, name, price, img }) => {

  const [carrito, setCarrito] = useState([]);

  function onAdd() {
    console.log('function onAdd');
    setCarrito([...carrito, { 'key': key, 'name': name, 'price': price, 'img': img }]);
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
      <ItemCount key={key} name={name} price={price} img={img} funcOnAdd={onAdd}/>
    </Card>
    
  )
}
