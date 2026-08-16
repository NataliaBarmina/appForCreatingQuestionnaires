import { type KeyboardEvent } from "react";

import { TCourse, TSectorStyles } from "../model/types";

import { pathStyles, sectorContentStyles, textStyles } from "./styles";

type Props = {
  course: TCourse;
  path: string;
  labelPosition: {
    x: number;
    y: number;
  };
  style: TSectorStyles;
  onSelect: (course: TCourse) => void;
};

export const CourseSector = ({ course, path, labelPosition, style, onSelect }: Props) => {
  function handleKeyDown(event: KeyboardEvent<SVGGElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(course);
    }
  }

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Выбрать курс ${course}`}
      className="group cursor-pointer outline-none"
      style={style}
      onClick={() => onSelect(course)}
      onKeyDown={handleKeyDown}
    >
      <g className={sectorContentStyles}>
        <path d={path} className={pathStyles} />

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
};
