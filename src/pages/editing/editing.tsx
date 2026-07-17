// import { QuestionCreationMethod } from "../creating";
import { CourseThemeSelection } from "../course-theme-selection";
// import { TRootState } from "@store/store";
// import { useSelector } from "react-redux";

//todo!!!!!!state.addTheme
export const Editing = () => {
  // const themes = useSelector((state: TRootState) => );

  // const hasThemes = Object.values(themes).length > 0;
  return (
    <div>
      {/* {!hasThemes ? <QuestionCreationMethod /> : <CourseThemeSelection />} */}
      <CourseThemeSelection />
    </div>
  );
};
