import cn from "classnames";
import { Badge } from "react-bootstrap";

interface RenderVersionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  version: number | string;
}

const RenderVersionBadge: React.FC<RenderVersionBadgeProps> = ({ version }) => {
  const temp: string | number = version;

  return (
    <Badge
      bg={cn({
        success: typeof temp === "number",
        primary: typeof temp === "string",
        "ms-2": true,
      })}
    >
      {temp}
    </Badge>
  );
};

export default RenderVersionBadge;
