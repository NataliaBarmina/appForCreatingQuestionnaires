import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { FormForCreatingTheme } from "@features/creating";
import { popoverTriggerStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const PopoverBlock = ({ course }: { course: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={popoverTriggerStyles}>{t("buttonLabel.addTheme")}</PopoverTrigger>
      <PopoverContent
        className="rounded-xl bg-neutral-500"
        style={{
          width: "calc(var(--radix-popover-trigger-width) * 1.1111)",
        }}
      >
        <FormForCreatingTheme closePopover={() => setOpen(false)} course={course} />
      </PopoverContent>
    </Popover>
  );
};
export default PopoverBlock;
