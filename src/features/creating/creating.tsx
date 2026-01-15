import { useNavigate } from "react-router-dom";
import Button from "../../shared/ui/buttons";
import { useTranslation } from "react-i18next";
import { cn } from "@lib/utils";
import { CreationModeButton } from "@store/commonTypes";

const circleStyles = cn(
  "mx-auto rounded-full bg-[rgb(48,80,80)]/85",
  "h-[80vw] w-[80vw]",
  "s:h-[65vw] s:w-[65vw]",
  "md:landscape:h-[60vw] md:landscape:w-[60vw]",
  "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
  "xl:landscape:h-[40vw] xl:landscape:w-[40vw]",
  "2xl:landscape:h-[32vw] 2xl:landscape:w-[32vw]"
);

const Creating: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (labelKey: string) => {
    navigate("/coursesSelection", { state: { buttonID: labelKey } });
  };

  return (
    <div className="pb-6">
      <div className="pb-8 pt-12 text-[150%] font-bold">{t("link.create")}</div>
      <div className={circleStyles}>
        <div className="flex h-[100%] w-[100%] flex-col justify-evenly">
          <Button
            buttonLabel={t("buttonLabel.byAI")}
            size="big"
            onClick={() => handleNavigate(CreationModeButton.AI)}
          />
          <Button
            buttonLabel={t("buttonLabel.yourself")}
            size="big"
            onClick={() => handleNavigate(CreationModeButton.MANUAL)}
          />
        </div>
      </div>
    </div>
  );
};
export default Creating;
