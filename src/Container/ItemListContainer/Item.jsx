import Card from 'react-bootstrap/Card'


export const Item = ({ name, price, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {price} Ver producto
        </Card.Text>
   </Card.Body>
    </Card>
  );
}
