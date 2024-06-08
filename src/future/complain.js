import { Form, Button, Col, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import './future.css'

function Complain() {
    return (
            <Form className="ComplainForm futureclass">
                <Badge bg="danger">Complain Form</Badge>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="+91" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="ID" placeholder="lalman_smcl or 809121" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your complain</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Form>
    );
}

export default Complain;