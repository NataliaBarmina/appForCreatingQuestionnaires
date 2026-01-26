type THeaders = {
  questionsGeneratedByAIHeader: string;
  courseHeader: string;
  themeHeader: string;
  courseName?: string;
  themeName?: string;
};
const mainHeaderStyles = "p-4 text-[150%] font-bold";
const headerStyles = "p-4 text-xl font-bold";

export const HeadersBlock = ({
  questionsGeneratedByAIHeader,
  courseHeader,
  themeHeader,
  courseName,
  themeName,
}: THeaders) => {
  return (
    <div>
      <div className={mainHeaderStyles}>{questionsGeneratedByAIHeader}</div>
      <div className={headerStyles}>
        {courseHeader} {courseName}
      </div>
      <div className={headerStyles}>{`${themeHeader} ${themeName}`}</div>
    </div>
  );
};
