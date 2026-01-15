type THeaders = {
  questionsGeneratedByAIHeader: string;
  courseHeader: string;
  themeHeader: string;
  course?: string;
  theme?: string;
};
const mainHeaderStyles = "p-4 text-[150%] font-bold";
const headerStyles = "p-4 text-xl font-bold";

const HeadersBlock = ({
  questionsGeneratedByAIHeader,
  courseHeader,
  themeHeader,
  course,
  theme,
}: THeaders) => {
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
