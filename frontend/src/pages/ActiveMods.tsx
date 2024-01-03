import { Container, Row } from "react-bootstrap";

import Navigation from "../components/Navigation";
import RenderActiveMods from "../components/RenderActiveMods";
import ActiveModsStats from "../components/ActiveModsStats";

import "./Home.css";
import "./ActiveMods.css";

const ActiveMods = () => {
  return (
    <>
      <Navigation />
      <ActiveModsStats />
      <Container className="bg-dark" data-bs-theme="dark">
        <Row xs={1} md={3} className="g-4">
          <RenderActiveMods />
        </Row>
      </Container>
    </>
  );
};

export default ActiveMods;
