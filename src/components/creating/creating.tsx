import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "@commonComponents/buttons";
import { useTranslation } from "react-i18next";

const Creating = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="pb-6">
      <div className="pb-8 pt-12 text-[150%] font-bold">
        {t("link.creating")}
      </div>
      <div
        className={classNames(
          "mx-auto rounded-full bg-[rgb(48,80,80)]/85",
          "h-[80vw] w-[80vw]",
          "s:h-[65vw] s:w-[65vw]",
          "md:landscape:h-[60vw] md:landscape:w-[60vw]",
          "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
          "xl:landscape:h-[40vw] xl:landscape:w-[40vw]",
          "xl:landscape:h-[32vw] xl:landscape:w-[32vw]",
        )}
      >
        <div className="flex h-[100%] w-[100%] flex-col justify-evenly">
          <Button
            buttonLabel={t("buttonLabel.byAI")}
            size="big"
            onClick={() =>
              navigate("/coursesSelection", {
                state: { buttonLabel: t("buttonLabel.byAI") },
              })
            }
          />
          <Button
            buttonLabel={t("buttonLabel.yourself")}
            size="big"
            onClick={() =>
              navigate("/coursesSelection", {
                state: { buttonLabel: t("buttonLabel.yourself") },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Creating;
