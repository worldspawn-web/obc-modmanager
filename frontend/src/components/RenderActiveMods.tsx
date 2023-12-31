import { Col, Card, Badge, ListGroup, Button } from "react-bootstrap";
import modsStore from "../store/tempMods";
import cn from "classnames";
import "./RenderActiveMods.css";

// TODO: REFACTOR THIS!
// # DESTRUCTURE JSON KEYS
// # CHANGE THE ITERATION WAY
// # SEPARATE THE CN FUNCTION
// # SEPARATE LIST LOGIC TO ADDITIONAL COMPONENT
// # OPTIMIZE NAMING

function RenderActiveMods() {
  const modsData = modsStore;
  return modsData.map((mod) => {
    const {
      id,
      name,
      // version,
      link,
      // type,
      // workshop,
      // coop,
      // filesize,
      trust,
      images,
      stats,
    } = mod;

    return (
      <Col key={id}>
        <Card className="mt-4 mb-4 active-mod-card">
          <Card.Img
            variant="top"
            src={images[0]["front-view"]}
            className="mb-1"
          />
          <Card.Body>
            <Card.Title>
              <Badge
                bg={cn({
                  success: trust === "New",
                  primary: trust === "Trusted",
                  warning: trust === "Unstable",
                })}
              >
                {trust}
              </Badge>
              <div className="mt-2 mb-3 mod-header">{name}</div>
            </Card.Title>

            {/* Stats */}

            <ListGroup as="ol" className="mb-4">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Quality</div>
                </div>
                <Badge
                  bg={cn({
                    success: stats[0].quality >= 4,
                    secondary: stats[0].quality === 3,
                    danger: stats[0].quality <= 2,
                  })}
                  pill
                >
                  {stats[0].quality}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Handling</div>
                </div>
                <Badge
                  bg={cn({
                    success: stats[0].handling >= 4,
                    secondary: stats[0].handling === 3,
                    danger: stats[0].handling <= 2,
                  })}
                  pill
                >
                  {stats[0].handling}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Tuning</div>
                </div>
                <Badge
                  bg={cn({
                    success: stats[0].tuning >= 4,
                    secondary: stats[0].tuning === 3,
                    danger: stats[0].tuning <= 2,
                  })}
                  pill
                >
                  {stats[0].tuning}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Size</div>
                </div>
                <Badge
                  bg={cn({
                    success: stats[0].size >= 4,
                    secondary: stats[0].size === 3,
                    danger: stats[0].size <= 2,
                  })}
                  pill
                >
                  {stats[0].size}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Co-op</div>
                </div>
                <Badge
                  bg={cn({
                    success: stats[0].coop,
                    danger: !stats[0].coop,
                  })}
                  pill
                >
                  {stats[0].coop ? "Good" : "Bad"}
                </Badge>
              </ListGroup.Item>
              <Button
                className="mt-4"
                variant="outline-warning"
                href={link}
                target="_blank"
              >
                Download
              </Button>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default RenderActiveMods;
