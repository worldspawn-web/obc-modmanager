import {
  Card,
  Button,
  Stack,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import queueStore from "../../store/queueMods";

const queueMods = queueStore.filter((mod) => mod.status === "queue");

const QueueLeftScreen = () => {
  return queueMods.map((mod) => {
    const { name, version, author, link, filesize, image } = mod;

    return (
      <>
        <Card data-bs-theme="dark" className="mx-4 my-4 queue-card">
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
      </>
    );
  });
};

export default QueueLeftScreen;
