import { CircleProps } from "./types";
import { smallCirclesStyles, circlesTextStyles } from "./styles";
import { cn } from "@lib/utils";

const Circle = ({
  colSpan,
  colStart,
  rowSpan,
  rowStart,
  buttonLabel,
  link,
  onClick,
}: CircleProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(link, buttonLabel);
  };

  return (
    <div className={cn("z-50", colSpan, colStart, rowSpan, rowStart)}>
      <div className={smallCirclesStyles} onClick={handleClick}>
        <p className={circlesTextStyles}>{buttonLabel}</p>
      </div>
    </div>
  );
};
export default Circle;
