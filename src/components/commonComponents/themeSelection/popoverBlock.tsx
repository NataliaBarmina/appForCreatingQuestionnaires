import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { FormForCreatingQuestionsByAI } from "@components/creating";
import { popoverTriggerStyles } from "./styles";
import { useTranslation } from "react-i18next";

const PopoverBlock = ({ course }: { course: string }) => {
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger className={popoverTriggerStyles}>
        {t("buttonLabel.addTheme")}
      </PopoverTrigger>
      <PopoverContent className="rounded-xl bg-neutral-500">
        <FormForCreatingQuestionsByAI course={course} />
      </PopoverContent>
    </Popover>
  );
};
export default PopoverBlock;
