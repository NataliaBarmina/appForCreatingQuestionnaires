import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "@components/commonComponents/buttons";

const Creating = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-6">
      <div className="pb-8 pt-12 text-[150%] font-bold">Создание вопросов</div>
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
            buttonName="нейросетью"
            size="big"
            onclick={() => navigate("/coursesSelectionWithShadcnUI")}
          />
          <Button
            buttonName="самостоятельно"
            size="big"
            onclick={() => navigate("/coursesSelectionWithMaterialUI")}
          />
        </div>
      </div>
    </div>
  );
};
export default Creating;
