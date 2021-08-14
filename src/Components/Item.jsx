import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../css/Item.css';

export const Item = ({ id, name, price, img }) => {
  return (
    <div className="item">
      <Card className="card">
        <Card.Img className="img" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price} Ver producto
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/item/${id}`}>
            <Button variant="secondary" size="md">Ver más</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  )
}
