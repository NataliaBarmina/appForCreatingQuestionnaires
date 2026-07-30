import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui";

import { CreateThemeForm } from "./create-theme-form";
import { popoverTriggerStyles } from "./styles";

export const CreateThemePopover = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={popoverTriggerStyles}>{t("buttonLabel.addTheme")}</PopoverTrigger>
      <PopoverContent
        className="border-none bg-green-800"
        style={{
          width: "calc(var(--radix-popover-trigger-width) * 2.3)",
        }}
      >
        <CreateThemeForm onSuccess={() => setOpen(false)} courseName={courseName} />
      </PopoverContent>
    </Popover>
  );
};
