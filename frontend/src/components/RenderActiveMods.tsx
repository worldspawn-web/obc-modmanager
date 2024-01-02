import { Col, Card, Badge, ListGroup, Button } from "react-bootstrap";
import modsStore from "../store/tempMods";
import cn from "classnames";
import "./RenderActiveMods.css";
import RenderTrustBadge from "./Badges/RenderTrustBadge";
import RenderVersionBadge from "./Badges/RenderVersionBadge";
import RenderSelectionList from "./RenderSelectionList";

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
      type,
      filesize,
      trust,
      images,
      stats,
    } = mod;

    return (
      <Col key={id}>
        <Card
          className={cn({
            "mt-4": true,
            "mb-5": true,
            "active-mod-card": true,
            "mod-vehicle": type === "bus" || type === "car",
            "mod-graphics": type === "weather" || type === "graphics",
            "mod-other": type === "other",
          })}
        >
          {/* TODO: Uncontrollable Carousel */}
          <Card.Img
            variant="top"
            src={images["front-view"]}
            className="mb-1 mod-img"
          />
          <Card.Body>
            <Card.Title>
              <RenderTrustBadge trustFactor={trust} />
              <RenderVersionBadge version={version} />
              <div className="mt-2 mb-3 mod-header">{name}</div>
            </Card.Title>

            {/* Stats */}

            <ListGroup as="ol" className="mb-4">
              <RenderSelectionList
                listname="Quality"
                qualityStatus={stats[0].quality}
              />
              <RenderSelectionList
                listname="Handling"
                qualityStatus={stats[0].handling}
              />
              <RenderSelectionList
                listname="Tuning"
                qualityStatus={stats[0].tuning}
              />
              <RenderSelectionList
                listname="Size"
                qualityStatus={stats[0].size}
              />
              <RenderSelectionList
                listname="FPS"
                qualityStatus={stats[0].fps}
              />
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
