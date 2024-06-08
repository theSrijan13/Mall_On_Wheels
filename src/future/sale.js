
import Alert from 'react-bootstrap/Alert'

function Sale() {
    return (
        <Alert className="futureclass" variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    There are no current Sale Going on.
  </p>
  <hr />
  <p className="mb-0">
    We will let you know about the upcomming sales!
  </p>
</Alert>
    );
}

export default Sale;