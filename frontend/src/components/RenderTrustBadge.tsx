import cn from "classnames";
import { Badge } from "react-bootstrap";

interface RenderTrustBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  trustFactor: string;
}

const RenderTrustBadge: React.FC<RenderTrustBadgeProps> = ({ trustFactor }) => {
  return (
    <Badge
      bg={cn({
        success: trustFactor === "New",
        primary: trustFactor === "Trusted",
        warning: trustFactor === "Unstable",
      })}
    >
      {trustFactor}
    </Badge>
  );
};

export default RenderTrustBadge;
