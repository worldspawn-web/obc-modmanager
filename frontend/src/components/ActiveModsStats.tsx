import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const ActiveModsStats = () => {
  // consider refactoring into one func -> calling with diff parameters
  const totalMods = document.querySelectorAll(".active-mod-card").length;
  const oneModPerc = 100 / totalMods;

  const vehicleLength = document.querySelectorAll(".mod-vehicle").length;
  const vehicleLengthPerc = Math.floor(vehicleLength * oneModPerc);

  const graphicsLength = document.querySelectorAll(".mod-graphics").length;
  const graphicsLengthPerc = Math.floor(graphicsLength * oneModPerc);

  const otherLength = document.querySelectorAll(".mod-other").length;
  const otherLengthPerc = Math.floor(otherLength * oneModPerc);

  return (
    <>
      <Container id="mods-counter" className="mt-4">
        <h2>Total amount of active mods: {totalMods}</h2>
        <ProgressBar>
          <ProgressBar
            striped
            animated
            variant="success"
            now={vehicleLengthPerc}
            label={`Vehicles - ${vehicleLengthPerc}%`}
            key={1}
          />
          <ProgressBar
            striped
            animated
            variant="warning"
            now={graphicsLengthPerc}
            label={`Graphics - ${graphicsLengthPerc}%`}
            key={2}
          />
          <ProgressBar
            striped
            animated
            variant="danger"
            now={otherLengthPerc}
            label={`Other - ${otherLengthPerc}%`}
            key={3}
          />
        </ProgressBar>
      </Container>
    </>
  );
};

export default ActiveModsStats;
