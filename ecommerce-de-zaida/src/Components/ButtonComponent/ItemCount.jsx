import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const ItemCount =({name}) => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/pollito.png" width="100" height="180"  />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    El pollo Pepe está creciendo mucho porque es muy tragón. Un divertido libro con pop-ups para niños a partir de 1 año.
    </Card.Text>
  </Card.Body>
</Card>
    );
}
