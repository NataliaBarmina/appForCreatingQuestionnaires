// удалить ????? не используется из-за сложности типизирования онклик

import { Link } from "react-router-dom";

interface ComponentProps {
  content: string;
  buttonSize: string;
  pageAddress: string;
  isValid: boolean;
}

export const Button = ({
  buttonSize,
  content,
  pageAddress,
  isValid,
}: ComponentProps) => {
  const commonButtonStyles =
    "block mx-auto rounded-lg border-2 border-solid border-gray-600 bg-salmon py-[4%] px-1 font-bold shadow-lg shadow-black hover:cursor-pointer hover:border-4 hover:border-solid hover:border-pink-900/40 hover:shadow-pink-900 ";
  const pageURL = isValid ? pageAddress : "";

  return (
    <div>
      {buttonSize === "big" && (
        <Link
          className={`w-[50%] text-[3vw] first:mb-[20%] ${commonButtonStyles}`}
          to={pageAddress}
        >
          {content}
        </Link>
      )}
      {buttonSize === "middle" && (
        <div className={`w-[35%] text-[3vw] ${commonButtonStyles}`}>
          {/* <Link to={pageURL}>{content}</Link> */}
        </div>
      )}
      {buttonSize === "small" && (
        <Link
          className={`w-[20vw] text-[2.2vw] ${commonButtonStyles}`}
          to={pageAddress}
        >
          {content}
        </Link>
      )}
    </div>
  );
};
