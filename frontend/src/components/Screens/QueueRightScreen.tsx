import { Container, Image } from "react-bootstrap";
import queueStore from "../../store/queueMods";

const declinedMods = queueStore.filter((mod) => mod.status === "declined");

// TODO: REFACTOR ASAP!

const QueueRightScreen = () => {
  return declinedMods.map((mod) => {
    const { name, link, image, declineReasons } = mod;

    const reasons = declineReasons?.map((reason) => {
      return <li className="declined-reason">{reason}</li>;
    });

    return (
      <Container>
        <a href={link} target="_blank" className="declined-container">
          <h4 className="declined-header px-4">{name}</h4>
          <Image src={image} className="declined-img" rounded />
          <span className="declined-reasons">{reasons}</span>
        </a>
      </Container>
    );
  });
};

export default QueueRightScreen;
