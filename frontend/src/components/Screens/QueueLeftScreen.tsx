import {
  Card,
  Button,
  Stack,
  ListGroup,
  ListGroupItem,
  Image,
  Col,
  Row,
} from "react-bootstrap";
import queueStore from "../../store/queueMods";

const queueMods = queueStore.filter((mod) => mod.status === "queue");

const QueueModCards = () => {
  return queueMods.map((mod) => {
    const { name, version, author, link, filesize, image } = mod;

    return (
      <Col className="pt-2">
        <Card data-bs-theme="dark" className="my-2 queue-card">
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Img src={image} className="queue-img" />
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Stack gap={2}>
              <Button variant="outline-warning" href={link}>
                Download ({filesize} mb)
              </Button>
              <ListGroup>
                <ListGroupItem>
                  <Image
                    src="../src/assets/dot.svg"
                    className="progress-dot progress-dot-warning mx-3"
                  ></Image>
                  Mod Author - <span className="mod-author">{author}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <Image
                    src="../src/assets/dot.svg"
                    className="progress-dot progress-dot-warning mx-3"
                  ></Image>
                  Version - <span className="mod-version">{version}</span>
                </ListGroupItem>
              </ListGroup>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

const QueueLeftScreen = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <QueueModCards />
    </Row>
  );
};

export default QueueLeftScreen;
