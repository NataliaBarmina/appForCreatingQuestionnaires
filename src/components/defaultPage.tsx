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

      <div className="z-0 col-span-5 col-start-1 row-span-7 row-start-1 h-[70vw] w-[70vw] rounded-full border-8 border-dotted border-gray-600/50 md:h-[65vh] md:w-[65vh] 2xl:h-[70vh] 2xl:w-[70vh]"></div>
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
    <div className={`z-10 ${colSpan} ${colStart} ${rowSpan} ${rowStart}`}>
      <div
        className="flex h-[30vw] w-[30vw] items-center justify-center rounded-full border-2 border-solid border-black bg-gray-400 shadow-lg shadow-black hover:cursor-pointer hover:border-2 hover:border-solid hover:border-pink-600 hover:shadow-xl hover:shadow-pink-600 md:h-[27vh] md:w-[27vh]"
        onClick={() => navigate(link)}
      >
        <p className="text-[3.5vw] md:text-[3vh]">{content}</p>
      </div>
    </div>
  );
};
//
