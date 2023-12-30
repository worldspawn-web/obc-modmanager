import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import "./Home.css";
import "./ActiveMods.css";
import RenderActiveMods from "../components/RenderActiveMods";

const ActiveMods = () => {
  return (
    <>
      <Navigation />
      <Container className="bg-dark" data-bs-theme="dark">
        <Row xs={1} md={3} className="g-4">
          <RenderActiveMods />
        </Row>
      </Container>
    </>
  );
};

export default ActiveMods;
