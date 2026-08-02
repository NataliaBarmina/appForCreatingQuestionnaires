import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { COURSES } from "@entities/course";
import {
  viewBoxStyles,
  textStyles,
  pathActiveStyles,
  pathNotActiveStyles,
  biCircleStyles,
  smallCircleStyles,
} from "./styles";

const CENTER = 300;
const OUTER_RADIUS = 270;
const INNER_RADIUS = 88;
const LABEL_RADIUS = 190;
const SECTOR_ANGLE = 360 / COURSES.length;
const ACTIVE_OFFSET = 14;
const OUTER_CORNER_RADIUS = 20;

function getPoint(radius: number, angle: number) {
  const angleInRadians = (angle * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(angleInRadians),
    y: CENTER + radius * Math.sin(angleInRadians),
  };
}

function createSectorPath(startAngle: number, endAngle: number) {
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

function getSectorTranslate(angle: number, isActive: boolean) {
  if (!isActive) {
    return { x: 0, y: 0 };
  }

  const angleInRadians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(angleInRadians) * ACTIVE_OFFSET,
    y: Math.sin(angleInRadians) * ACTIVE_OFFSET,
  };
}

export const CourseWheelContent = ({ buttonID }: { buttonID: string }) => {
  const navigate = useNavigate();

  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  return (
    <div className="flex w-full justify-center">
      <svg viewBox="0 0 600 600" role="group" aria-label="Выбор курса" className={viewBoxStyles}>
        <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS + 5} className={biCircleStyles} />

        {COURSES.map((course, index) => {
          const startAngle = -135 + index * SECTOR_ANGLE;
          const endAngle = startAngle + SECTOR_ANGLE;
          const middleAngle = startAngle + SECTOR_ANGLE / 2;

          const labelPosition = getPoint(LABEL_RADIUS, middleAngle);
          const isHovered = hoveredCourse === course;
          const translate = getSectorTranslate(middleAngle, isHovered);

          return (
            //сектор с названием курса
            <g
              key={course}
              role="button"
              tabIndex={0}
              aria-label={`Выбрать курс ${course}`}
              className="group cursor-pointer outline-none"
              onMouseEnter={() => setHoveredCourse(course)}
              onMouseLeave={() => setHoveredCourse(null)}
              onFocus={() => setHoveredCourse(course)}
              onBlur={() => setHoveredCourse(null)}
              onClick={() => navigate("/createTheme", { state: { course, buttonID } })}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                }
              }}
            >
              <g
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px)`,
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: "transform 220ms ease",
                }}
              >
                <path
                  d={createSectorPath(startAngle, endAngle)}
                  className={isHovered ? pathActiveStyles : pathNotActiveStyles}
                />

                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={textStyles}
                >
                  {course}
                </text>
              </g>
            </g>
          );
        })}

        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} className={smallCircleStyles} />
      </svg>
    </div>
  );
};
