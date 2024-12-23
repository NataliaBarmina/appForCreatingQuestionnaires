import { useNavigate } from "react-router-dom";
import TailwindSample from "../sample/tailwindSample";

const Creating = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container bg-gray-400 md:min-h-[80vh] md:border-0 md:bg-blue-200">
        <div className="h1">Создание вопросов</div>
        <div className="mx-auto mb-4 h-[60vw] w-[60vw] rounded-full bg-green-800 py-[15vw] md:h-[65vh] md:w-[65vh] md:py-[15vh]">
          <button
            onClick={() => navigate("/formForCreatingQuestionsByAI")}
            className="btn mb-[14vw] block w-[30vw] py-2 text-[3vw] md:mb-[13vh] md:w-[35vh] md:text-[4vh]"
          >
            нейросетью
          </button>

          <button
            onClick={() => navigate("/formForCreatingQuestionsYourself")}
            className="btn block w-[30vw] py-2 text-[3vw] md:w-[35vh] md:text-[4vh]"
          >
            самостоятельно
          </button>
        </div>
      </div>
      {/* <TailwindSample /> */}
    </div>
  );
};
export default Creating;
//
