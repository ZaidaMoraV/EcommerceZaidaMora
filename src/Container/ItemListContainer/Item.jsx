import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id, name, price, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price} Ver producto
        </Card.Text>
        <Link to={"/item/" + id}>ver mas</Link>
      </Card.Body>
    </Card>
  )
}

