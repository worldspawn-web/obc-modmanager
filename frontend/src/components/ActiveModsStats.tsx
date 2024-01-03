import { Container, Image } from "react-bootstrap";
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
            label={`${vehicleLengthPerc}%`}
            key={1}
          />
          <ProgressBar
            striped
            animated
            variant="warning"
            now={graphicsLengthPerc}
            label={`${graphicsLengthPerc}%`}
            key={2}
          />
          <ProgressBar
            striped
            animated
            variant="danger"
            now={otherLengthPerc}
            label={`${otherLengthPerc}%`}
            key={3}
          />
        </ProgressBar>
        <div className="progress-dot-container">
          <span>Vehicles</span>
          <Image
            src="../src/assets/dot.svg"
            className="progress-dot progress-dot-success mx-3 "
          ></Image>
          <span>Graphics</span>
          <Image
            src="../src/assets/dot.svg"
            className="progress-dot progress-dot-warning mx-3"
          ></Image>
          <span>Other</span>
          <Image
            src="../src/assets/dot.svg"
            className="progress-dot progress-dot-danger mx-3"
          ></Image>
        </div>
      </Container>
    </>
  );
};

export default ActiveModsStats;
