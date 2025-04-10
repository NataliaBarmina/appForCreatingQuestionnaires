import { useLocation } from "react-router-dom";
import {
  mainHeaderStyles,
  courseHeaderStyles,
  themeHeaderStyles,
} from "./styles";

type THeaders = {
  questionsGeneratedByAIHeader: string;
  courseHeader: string;
};

const Headers = ({ questionsGeneratedByAIHeader, courseHeader }: THeaders) => {
  const location = useLocation();
  const { course, theme } = location.state || {};
  return (
    <div>
      <div className={mainHeaderStyles}>{questionsGeneratedByAIHeader}</div>
      <div className={courseHeaderStyles}>
        {courseHeader} {course}
      </div>
      <div className={themeHeaderStyles}>{`Тема: ${theme}`}</div>
    </div>
  );
};
export default Headers;
