import { useNavigate } from "react-router-dom";

const CourseSelection = () => {
  return (
    <div>
      <div className="h1 2xl:py-[4vh]">Выберите дисциплину</div>

      <div className="container bg-green-800 pt-8 2xl:min-h-[65vh] 2xl:pt-[7vh]">
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
      className="btn mb-8 w-[75%] py-4 text-xl 2xl:mb-[7vh]"
      onClick={() => navigate("/themeSelection")}
    >
      {course}
    </div>
  );
};
