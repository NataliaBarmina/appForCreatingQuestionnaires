import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { FormForCreatingTheme } from "@components/creating";
import { popoverTriggerStyles } from "./styles";
import { useTranslation } from "react-i18next";

const PopoverBlock = () => {
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger className={popoverTriggerStyles}>
        {t("buttonLabel.addTheme")}
      </PopoverTrigger>
      <PopoverContent
        className="rounded-xl bg-neutral-500"
        style={{
          width: "calc(var(--radix-popover-trigger-width) * 1.1111)",
        }}
      >
        <FormForCreatingTheme />
      </PopoverContent>
    </Popover>
  );
};
export default PopoverBlock;
