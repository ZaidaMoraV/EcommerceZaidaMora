import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../css/Item.css';

export const Item = ({ id, name, price, img }) => {
  return (
    <div className="item">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price} Ver producto
          </Card.Text>
          <Link to={`/item/${id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    </div>
  )
}
