import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-7 items-center justify-items-center py-14">
      <Circle
        colSpan="col-span-3"
        colStart="col-start-2"
        rowSpan="row-span-2"
        rowStart="row-start-1"
        content="Создание"
        link="/creating"
      />
      <Circle
        colSpan="col-span-2"
        colStart="col-start-1"
        rowSpan="row-span-3"
        rowStart="row-start-4"
        content="Редактирование"
        link="/courseSelection"
      />
      <Circle
        colSpan="col-span-2"
        colStart="col-start-4"
        rowSpan="row-span-3"
        rowStart="row-start-4"
        content="Анкетирование"
        link="/questionnaire"
      />

      <div
        className={classNames(
          "z-0 col-span-5 col-start-1 row-span-7 row-start-1 h-[70vw] w-[70vw]",
          "rounded-full border-8 border-dotted border-gray-600/50",
          // "2xl:h-[70vh] 2xl:w-[70vh]",
          "md:landscape:h-[55vw] md:landscape:w-[55vw]",
          "md:portrait:h-[60vh] md:portrait:w-[60vh]",
          "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
          "lg:portrait:h-[55vh] lg:portrait:w-[55vh]",
          "2xl:landscape:h-[38vw] 2xl:landscape:w-[38vw]",
          "2xl:portrait:h-[50vh] 2xl:portrait:w-[50vh]",
        )}
      ></div>
    </div>
  );
};
export default DefaultPage;

interface ComponentProps {
  colSpan: string;
  colStart: string;
  rowSpan: string;
  rowStart: string;
  content: string;
  link: string;
}

const Circle = ({
  colSpan,
  colStart,
  rowSpan,
  rowStart,
  content,
  link,
}: ComponentProps) => {
  const navigate = useNavigate();

  return (
    <div className={classNames("z-10", colSpan, colStart, rowSpan, rowStart)}>
      <div
        className={classNames(
          "flex h-[30vw] w-[30vw] items-center justify-center",
          "rounded-full border-2 border-solid border-black",
          "bg-gray-400 shadow-lg shadow-black",
          "hover:border-2 hover:border-solid hover:border-pink-600",
          "hover:cursor-pointer hover:shadow-xl hover:shadow-pink-600",
          "md:landscape:h-[20vw] md:landscape:w-[20vw]",
          "md:portrait:h-[27vh] md:portrait:w-[27vh]",
          "lg:landscape:h-[18vw] lg:landscape:w-[18vw]",
          "lg:portrait:h-[24vh] lg:portrait:w-[24vh]",
          "2xl:landscape:h-[14vw] 2xl:landscape:w-[14vw]",
          "2xl:portrait:h-[20vh] 2xl:portrait:w-[20vh]",
        )}
        onClick={() => navigate(link)}
      >
        <p
          className={classNames(
            "text-[3.5vw]",
            "md:portrait:text-[2.5vh] md:landscape:text-[2.3vw]",
            "lg:landscape:text-[2vw]",
            "2xl:landscape:text-[1.6vw]",
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
//
