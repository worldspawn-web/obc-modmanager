import cn from "classnames";
import { Badge } from "react-bootstrap";

interface RenderQualityBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  quality: number | undefined;
}

const RenderQualityBadge: React.FC<RenderQualityBadgeProps> = ({ quality }) => {
  if (quality === undefined) return;
  let qualityMsg = "";

  if (quality === 5) qualityMsg = "Great";
  if (quality === 3 || quality === 4) qualityMsg = "Average";
  if (quality === 2 || quality === 1) qualityMsg = "Bad";
  if (quality === 0) qualityMsg = "N/A";

  return (
    <Badge
      bg={cn({
        success: qualityMsg === "Great",
        primary: qualityMsg === "Average",
        danger: qualityMsg === "Bad",
        dark: qualityMsg === "N/A",
      })}
    >
      {qualityMsg}
    </Badge>
  );
};

export default RenderQualityBadge;
