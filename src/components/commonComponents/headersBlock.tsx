import { useLocation } from "react-router-dom";

type THeaders = {
  questionsGeneratedByAIHeader: string;
  courseHeader: string;
  themeHeader: string;
};
const mainHeaderStyles = "p-4 text-[150%] font-bold";
const headerStyles = "p-4 text-xl font-bold";

const HeadersBlock = ({
  questionsGeneratedByAIHeader,
  courseHeader,
  themeHeader,
}: THeaders) => {
  const location = useLocation();
  const { course, theme } = location.state || {};
  return (
    <div>
      <div className={mainHeaderStyles}>{questionsGeneratedByAIHeader}</div>
      <div className={headerStyles}>
        {courseHeader} {course}
      </div>
      <div className={headerStyles}>{`${themeHeader} ${theme}`}</div>
    </div>
  );
};
export default HeadersBlock;
