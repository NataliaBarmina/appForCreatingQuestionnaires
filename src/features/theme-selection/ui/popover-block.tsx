import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Popover, PopoverContent, PopoverTrigger } from "@shared/shadcn";

import { FormForCreatingTheme } from "./form-for-creating-theme";
import { popoverTriggerStyles } from "./styles";

export const PopoverBlock = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={popoverTriggerStyles}>{t("buttonLabel.addTheme")}</PopoverTrigger>
      <PopoverContent
        className="rounded-xl bg-neutral-500"
        style={{
          width: "calc(var(--radix-popover-trigger-width) * 2.3)",
        }}
      >
        <FormForCreatingTheme closePopover={() => setOpen(false)} courseName={courseName} />
      </PopoverContent>
    </Popover>
  );
};
