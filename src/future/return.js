import Accordion from 'react-bootstrap/Accordion'
import './future.css'

function Return() {
    return (
        <Accordion className="futureclass" defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Return via call to our executive</Accordion.Header>
    <Accordion.Body>
      Step 1: this and that
      Step 2: this and that
      Step 3: completed!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Return online</Accordion.Header>
    <Accordion.Body>
      Step 1: this and that
      Step 2: this and that
      Step 3: completed!
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    );
}

export default Return;