import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const CourseSelection = () => {
  return (
    <div className="pb-6">
      <div
        className={classNames("py-6 text-[150%] font-bold", "pb-10 md:pt-12")}
      >
        Выберите дисциплину
      </div>

      <div
        className={classNames(
          "mx-auto bg-green-800",
          "border-2 border-solid border-gray-600",
          "w-[100%] pt-10",
          "s:w-[90%] s:rounded-2xl",
          "xl:w-[80%]",
          "2xl:w-[70%]",
        )}
      >
        <div className="flex">
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
        "mb-10 w-[75%] py-4 text-xl",
        "xl:w-[65%]",
        "2xl:mb-16 2xl:w-[60%] 2xl:py-5",
      )}
      onClick={() => navigate("/themeSelection")}
    >
      {course}
    </div>
  );
};
