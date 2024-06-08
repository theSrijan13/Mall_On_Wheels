import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

function Wishlist() {
    return (

        <ListGroup className="futureclass" as="ol" numbered>
            <Badge bg="success">Your Current Wishlist</Badge>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Iphone 13 pro max</div>
                    Is on offer!
                </div>
                <Badge variant="primary" pill>
                    2
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Macbook M1 pro</div>
                    Will be on sale on Dec 2022
                </div>
                <Badge variant="primary" pill>
                    1
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Male Kurta for Wedding</div>
                    Wedding season sale is ongoing !!!!!!!
                </div>
                <Badge variant="primary" pill>
                    5
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Wishlist;