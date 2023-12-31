import { Col, Card, Badge, ListGroup, Button } from "react-bootstrap";
import modsStore from "../store/tempMods";
import cn from "classnames";
import "./RenderActiveMods.css";
import RenderTrustBadge from "./RenderTrustBadge";
import RenderQualityBadge from "./RenderQualityBadge";
import RenderVersionBadge from "./RenderVersionBadge";

// TODO: REFACTOR THIS!
// # SEPARATE THE CN FUNCTION
// # SEPARATE LIST LOGIC TO ADDITIONAL COMPONENT
// # OPTIMIZE NAMING

function RenderActiveMods() {
  const modsData = modsStore;
  return modsData.map((mod) => {
    const {
      id,
      name,
      version,
      link,
      // TODO: IF TYPE IS NOT VEHICLE -> RENDER DIFFERENT LIST ITEMS
      // # quality, size, coop, fps
      // type,
      filesize,
      trust,
      images,
      stats,
    } = mod;

    return (
      <Col key={id}>
        <Card className="mt-4 mb-4 active-mod-card">
          <Card.Img variant="top" src={images["front-view"]} className="mb-1" />
          <Card.Body>
            <Card.Title>
              <RenderTrustBadge trustFactor={trust} />
              <RenderVersionBadge version={version} />
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
                <RenderQualityBadge quality={stats[0].quality} />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Handling</div>
                </div>
                <RenderQualityBadge quality={stats[0].handling} />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Tuning</div>
                </div>
                <RenderQualityBadge quality={stats[0].tuning} />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Size</div>
                </div>
                <RenderQualityBadge quality={stats[0].size} />
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">FPS</div>
                </div>
                <RenderQualityBadge quality={stats[0].fps} />
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
                  {stats[0].coop ? "Compatible" : "Unstable"}
                </Badge>
              </ListGroup.Item>
              <Button
                className="mt-4"
                variant="outline-warning"
                href={link}
                target="_blank"
              >
                Download ({filesize} mb)
              </Button>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default RenderActiveMods;
