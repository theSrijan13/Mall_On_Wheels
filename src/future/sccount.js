import { Form, Button} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'

function Sccount() {
    return (
        <Form className="futureclass">
            <Button variant="danger">
                Login Required <Badge bg="primary">50% off on first shop!</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Sccount;