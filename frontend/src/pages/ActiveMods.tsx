import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";
import "./Home.css";
import "./ActiveMods.css";

const ActiveMods = () => {
  // const modsLength = 8;
  // TODO: implement getting data from backend
  return (
    <>
      <Navigation />
      <Container className="bg-dark" data-bs-theme="dark">
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src="../src/assets/testimage.jpg" />
                <Card.Body>
                  <Card.Title>Да поебать ему</Card.Title>
                  <Card.Text>
                    Как бы ты ни пытался ему что-либо доказать, его реакция
                    останется непоколебимой. Да поебать ему...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ActiveMods;
