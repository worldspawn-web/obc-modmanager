import cn from "classnames";
import { Badge } from "react-bootstrap";

interface RenderQualityBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  quality: number;
}

const RenderQualityBadge: React.FC<RenderQualityBadgeProps> = ({ quality }) => {
  let qualityMsg = "";

  if (quality >= 4) qualityMsg = "Great";
  if (quality === 3) qualityMsg = "Average";
  if (quality <= 2) qualityMsg = "Bad";

  return (
    <Badge
      bg={cn({
        success: qualityMsg === "Great",
        primary: qualityMsg === "Average",
        danger: qualityMsg === "Bad",
      })}
    >
      {qualityMsg}
    </Badge>
  );
};

export default RenderQualityBadge;
