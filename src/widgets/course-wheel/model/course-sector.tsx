import { COURSES } from "@entities/course";

import { createSectorPath, getOffset, getPoint } from "../lib/course-wheel-geometry";
import { LABEL_RADIUS, SECTOR_ANGLE } from "./constants";
import { TSectorStyles } from "./types";

export const COURSE_SECTORS = COURSES.map((course, index) => {
  const startAngle = -135 + index * SECTOR_ANGLE;
  const endAngle = startAngle + SECTOR_ANGLE;
  const middleAngle = startAngle + SECTOR_ANGLE / 2;

  const labelPosition = getPoint(LABEL_RADIUS, middleAngle);
  const offset = getOffset(middleAngle);

  const style: TSectorStyles = {
    "--sector-x": `${offset.x}px`,
    "--sector-y": `${offset.y}px`,
  };

  return {
    course,
    path: createSectorPath(startAngle, endAngle),
    labelPosition,
    style,
  };
});
