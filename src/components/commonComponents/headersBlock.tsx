import { useLocation } from "react-router-dom";

type THeaders = {
  questionsGeneratedByAIHeader: string;
  courseHeader: string;
  themeHeader: string;
};

const HeadersBlock = ({
  questionsGeneratedByAIHeader,
  courseHeader,
  themeHeader,
}: THeaders) => {
  const location = useLocation();
  const { course, theme } = location.state || {};
  return (
    <div>
      <div className={"p-4 text-[150%] font-bold"}>
        {questionsGeneratedByAIHeader}
      </div>
      <div className={"p-4 text-xl font-bold"}>
        {courseHeader} {course}
      </div>
      <div className={"p-4 text-xl font-bold"}>{`${themeHeader} ${theme}`}</div>
    </div>
  );
};
export default HeadersBlock;
