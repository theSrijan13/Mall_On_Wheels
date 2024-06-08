import { Card, Button } from 'react-bootstrap'
import './future.css'

function Order() {
    return (
        <Card className="text-center futureclass">
  <Card.Header>Malls On Wheels</Card.Header>
  <Card.Body>
    <Card.Title>This Function is under Construction!</Card.Title>
    <Card.Text>
      Shop with us on malls on wheels TODAY.
    </Card.Text>
    <Button variant="primary">Visit a local Store</Button>
  </Card.Body>
  <Card.Footer className="text-muted">1243434 People Served</Card.Footer>
</Card>
    );
}

export default Order;