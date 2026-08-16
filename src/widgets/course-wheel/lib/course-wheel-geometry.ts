import {
  ACTIVE_OFFSET,
  CENTER,
  INNER_RADIUS,
  OUTER_CORNER_RADIUS,
  OUTER_RADIUS,
} from "../model/constants";

export function getPoint(radius: number, angle: number) {
  const angleInRadians = (angle * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(angleInRadians),
    y: CENTER + radius * Math.sin(angleInRadians),
  };
}

export function getOffset(angle: number) {
  const angleInRadians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(angleInRadians) * ACTIVE_OFFSET,
    y: Math.sin(angleInRadians) * ACTIVE_OFFSET,
  };
}

export function createSectorPath(startAngle: number, endAngle: number) {
  const cornerAngle = (OUTER_CORNER_RADIUS / OUTER_RADIUS) * (180 / Math.PI);

  const outerArcStart = getPoint(OUTER_RADIUS, startAngle + cornerAngle);

  const outerArcEnd = getPoint(OUTER_RADIUS, endAngle - cornerAngle);

  const outerCornerStart = getPoint(OUTER_RADIUS, startAngle);
  const outerCornerEnd = getPoint(OUTER_RADIUS, endAngle);

  const outerSideStart = getPoint(OUTER_RADIUS - OUTER_CORNER_RADIUS, startAngle);

  const outerSideEnd = getPoint(OUTER_RADIUS - OUTER_CORNER_RADIUS, endAngle);

  const innerStart = getPoint(INNER_RADIUS, startAngle);
  const innerEnd = getPoint(INNER_RADIUS, endAngle);

  return [
    `M ${outerSideStart.x} ${outerSideStart.y}`,
    `Q ${outerCornerStart.x} ${outerCornerStart.y}
       ${outerArcStart.x} ${outerArcStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS}
       0 0 1
       ${outerArcEnd.x} ${outerArcEnd.y}`,
    `Q ${outerCornerEnd.x} ${outerCornerEnd.y}
       ${outerSideEnd.x} ${outerSideEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS}
       0 0 0
       ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}
