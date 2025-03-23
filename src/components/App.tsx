import classNames from "classnames";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const classesForLinks = classNames(
  "block p-4 bg-black  w-[100%] mb-4",
  "text-center text-[140%] text-white",
  "shadow-lg shadow-stone-900",
  "hover:text-pink-900 focus:text-emerald-400",
  "md:mb-[8vh] md:shadow-none lg:mb-[11vh]",
);

const App = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "mx-auto text-center",
        "md:min-h-dvh md:bg-black",
        "lg:w-[85%]",
        "xl:w-[80%]",
        "2xl:w-[70%]",
      )}
    >
      {/* чтобы текст не прятался под зеленую полосу вводим доп контейнер: */}
      <div className="md:h-[12vh] md:w-[100%]">
        <div
          className={classNames(
            "z-50 mb-2 h-[12vh] w-[100%]",
            "bg-green-800 shadow-lg shadow-stone-900",
            "md:fixed md:left-0 md:top-0",
            "lg:left-[7.5vw] lg:w-[85%]",
            "xl:left-[10vw] xl:w-[80%]",
            "2xl:left-[14.9vw] 2xl:w-[70%]",
          )}
        ></div>
      </div>
      <div
        className={classNames(
          "mx-auto block w-screen align-top",
          "shadow-lg shadow-[#241515]",
          "md:inline-block md:min-h-[86vh] md:w-[30%]",
          "lg:pt-[13vh]",
        )}
      >
        <div
          className={classNames(
            "md:fixed md:left-0 md:top-[30vh] md:w-[30%]",
            "lg:left-[7.5vw] lg:w-[25.5vw]",
            "xl:left-[10vw] xl:w-[24vw]",
            "2xl:left-[15vw] 2xl:w-[20.5vw]",
          )}
        >
          <Link to="/creating" className={classesForLinks}>
            {t("link.creating")}
          </Link>
          <button
            className={classesForLinks}
            onClick={() => {
              navigate("/coursesSelection", {
                state: { buttonLabel: t("buttonLabel.editing") },
              });
            }}
          >
            {t("link.editing")}
          </button>
          <Link to="/questionnaire" className={classesForLinks}>
            {t("link.questionnaire")}
          </Link>
        </div>
      </div>
      <div
        className={classNames(
          "mx-auto w-screen bg-[#D3D6D6] text-center",
          "shadow-lg shadow-[#241515]",
          "md:inline-block md:min-h-[86vh] md:w-[70%]",
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default App;
