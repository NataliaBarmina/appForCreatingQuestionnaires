import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const CourseSelection = () => {
  return (
    <div>
      <div className="p-4 text-[150%] font-bold 2xl:py-[4vh]">
        Выберите дисциплину
      </div>

      <div
        className={classNames(
          "mx-auto mb-4 w-[90%] bg-green-800 px-8",
          "rounded-2xl border-2 border-solid border-gray-600",
          "2xl:min-h-[65vh] 2xl:pt-[7vh]",
        )}
      >
        <div className="flex justify-around">
          <div className="w-full">
            <Courses course="JavaScript" />
            <Courses course="TypeScript" />
            <Courses course="CSS" />
            <Courses course="HTML" />
          </div>
          <div className="w-full">
            <Courses course="Git" />
            <Courses course="React" />
            <Courses course="Cmd" />
            <Courses course="Прочее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;

interface ComponentProps {
  course: string;
}

const Courses = ({ course }: ComponentProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        //общие стили для всех кнопок:
        "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
        "rounded-lg border-2 border-solid border-gray-600",
        "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
        "hover:border hover:border-solid hover:border-pink-900",
        // меняющиеся стили:
        "mb-8 w-[75%] py-4 text-xl",
        "2xl:mb-[7vh]",
      )}
      onClick={() => navigate("/themeSelection")}
    >
      {course}
    </div>
  );
};
