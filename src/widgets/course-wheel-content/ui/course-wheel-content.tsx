import { useLocation, useNavigate } from "react-router-dom";

import { ThemeCreationMode, ThemeEditMode } from "@entities/theme";

import { COURSE_SECTORS } from "../model/course-sector";
import { TCourse } from "../model/types";
import { CENTER, INNER_RADIUS, OUTER_RADIUS } from "../model/constants";
import { bigCircleStyles, smallCircleStyles, viewBoxStyles } from "./styles";
import { CourseSector } from "./course-sector";

export const CourseWheelContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { buttonID } = location.state;

  function selectCourse(course: TCourse) {
    const state = {
      course,
      buttonID,
    };

    if (buttonID === ThemeCreationMode.MANUAL || buttonID === ThemeCreationMode.AI) {
      navigate("/createTheme", { state });
      return;
    }

    if (buttonID === ThemeEditMode.EDIT) {
      navigate("/editThemes", { state });
    }
  }

  return (
    <div className="flex w-full justify-center">
      <svg viewBox="0 0 600 600" role="group" aria-label="Выбор курса" className={viewBoxStyles}>
        <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS + 5} className={bigCircleStyles} />

        {COURSE_SECTORS.map(({ course, path, labelPosition, style }) => (
          <CourseSector
            key={course}
            course={course}
            path={path}
            labelPosition={labelPosition}
            style={style}
            onSelect={selectCourse}
          />
        ))}

        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} className={smallCircleStyles} />
      </svg>
    </div>
  );
};
