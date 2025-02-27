import classNames from "classnames";

type MyProps = {
  styles: string;
  value: string;
  id: string;
};

const StaticFieldForQuestionsAndAnswers = ({ styles, value, id }: MyProps) => {
  return (
    <div
      id={id}
      className={classNames(
        "w-[100%] bg-blue-100 text-left",
        "rounded-md border-4 border-solid border-blue-200",
        "mb-2 px-4 py-3 text-[120%]",
        styles,
      )}
    >
      {value}
    </div>
  );
};
export default StaticFieldForQuestionsAndAnswers;
