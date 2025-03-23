import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const DefaultPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToPage = useCallback(
    (link: string, buttonLabel?: string) => {
      if (buttonLabel === t("buttonLabel.editing")) {
        navigate(link, { state: { buttonLabel } });
      } else navigate(link);
    },
    [navigate],
  );

  const circleConfig = [
    {
      colSpan: "col-span-3",
      colStart: "col-start-2",
      rowSpan: "row-span-2",
      rowStart: "row-start-1",
      buttonLabel: "Создание",
      link: "/creating",
    },
    {
      colSpan: "col-span-2",
      colStart: "col-start-1",
      rowSpan: "row-span-3",
      rowStart: "row-start-4",
      buttonLabel: "Редактирование",
      link: "/coursesSelection",
    },
    {
      colSpan: "col-span-2",
      colStart: "col-start-4",
      rowSpan: "row-span-3",
      rowStart: "row-start-4",
      buttonLabel: "Анкетирование",
      link: "/questionnaire",
    },
  ];

  return (
    <div className="grid grid-cols-5 grid-rows-7 items-center justify-items-center py-14">
      {circleConfig.map((circle, index) => (
        <Circle key={index} {...circle} onClick={navigateToPage} />
      ))}

      <div
        className={classNames(
          "z-0 col-span-5 col-start-1 row-span-7 row-start-1 h-[70vw] w-[70vw]",
          "rounded-full border-8 border-dotted border-stone-700",
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

type ComponentProps = {
  colSpan: string;
  colStart: string;
  rowSpan: string;
  rowStart: string;
  buttonLabel?: string;
  link: string;
  onClick: (link: string, buttonLabel?: string) => void;
};

const baseCircleClasses =
  "flex items-center justify-center rounded-full bg-stone-700 text-pink-100 shadow-md shadow-stone-950";
const hoverCircleClasses =
  "hover:border-2 hover:border-solid hover:border-zinc-800 hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950";
const responsiveCircleSizes = {
  default: "h-[30vw] w-[30vw]",
  mdLandscape: "md:landscape:h-[20vw] md:landscape:w-[20vw]",
  mdPortrait: "md:portrait:h-[27vh] md:portrait:w-[27vh]",
  lgLandscape: "lg:landscape:h-[18vw] lg:landscape:w-[18vw]",
  lgPortrait: "lg:portrait:h-[24vh] lg:portrait:w-[24vh]",
  xlLandscape: "2xl:landscape:h-[14vw] 2xl:landscape:w-[14vw]",
  xlPortrait: "2xl:portrait:h-[20vh] 2xl:portrait:w-[20vh]",
};

const Circle = ({
  colSpan,
  colStart,
  rowSpan,
  rowStart,
  buttonLabel,
  link,
  onClick,
}: ComponentProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(link, buttonLabel);
  };

  return (
    <div className={classNames("z-50", colSpan, colStart, rowSpan, rowStart)}>
      <div
        className={classNames(
          baseCircleClasses,
          hoverCircleClasses,
          responsiveCircleSizes.default,
          responsiveCircleSizes.mdLandscape,
          responsiveCircleSizes.mdPortrait,
          responsiveCircleSizes.lgLandscape,
          responsiveCircleSizes.lgPortrait,
          responsiveCircleSizes.xlLandscape,
          responsiveCircleSizes.xlPortrait,
        )}
        onClick={handleClick}
      >
        <p
          className={classNames(
            "text-[3.5vw]",
            "md:portrait:text-[2.5vh] md:landscape:text-[2.3vw]",
            "lg:landscape:text-[2vw]",
            "2xl:landscape:text-[1.6vw]",
          )}
        >
          {buttonLabel}
        </p>
      </div>
    </div>
  );
};
