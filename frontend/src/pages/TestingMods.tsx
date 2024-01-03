import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

import "./TestingMods.css";
import QueueLeftScreen from "../components/Screens/QueueLeftScreen";

const TestingMods = () => {
  return (
    <>
      <Navigation />
      <Container>
        <div className="split-screen">
          <div className="left-screen">{<QueueLeftScreen />}</div>
          <div className="right-screen">tut budet component 2</div>
        </div>
      </Container>
    </>
  );
};

export default TestingMods;
