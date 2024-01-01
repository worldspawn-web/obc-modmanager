import { ListGroup } from "react-bootstrap";
import RenderQualityBadge from "./Badges/RenderQualityBadge";

interface RenderSelectionListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  listname: string;
  qualityStatus: number | undefined;
}

const RenderSelectionList: React.FC<RenderSelectionListProps> = ({
  listname,
  qualityStatus,
}) => {
  if (qualityStatus === undefined) return;

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{listname}</div>
      </div>
      <RenderQualityBadge quality={qualityStatus} />
    </ListGroup.Item>
  );
};

export default RenderSelectionList;
