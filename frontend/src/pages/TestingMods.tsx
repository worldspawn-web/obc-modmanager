import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

import "./TestingMods.css";
import QueueLeftScreen from "../components/Screens/QueueLeftScreen";
import QueueRightScreen from "../components/Screens/QueueRightScreen";

const TestingMods = () => {
  return (
    <>
      <Navigation />
      <Container>
        <div className="split-screen">
          <div className="left-screen py-4 px-4">
            <h2 className="screen-header mx-4">Mods in Queue:</h2>
            <QueueLeftScreen />
          </div>
          <div className="right-screen py-4 px-4">
            <h2 className="screen-header mx-4">Declined Mods:</h2>
            <div className="declined-mods">
              <QueueRightScreen />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TestingMods;
