import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui";

import { CreateThemeForm } from "./create-theme-form";
import { popoverTriggerStyles, formContainerStyles } from "./styles";
import { PlusCircleIcon } from "./plus-circle-icon";

export const CreateThemePopover = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={popoverTriggerStyles}>
        {t("createTheme.buttonLabel")}
      </PopoverTrigger>
      <PopoverContent
        className="w-[45rem] rounded-2xl border-none bg-green-800 p-0"
        side="bottom"
        align="center"
        sideOffset={-37}
      >
        <div className={formContainerStyles}>
          <div className="flex items-center gap-4 pb-6 pt-4">
            <PlusCircleIcon />
            <h1 className="pt-0">{t("header.addTheme")}</h1>
          </div>
          <CreateThemeForm onSuccess={() => setOpen(false)} courseName={courseName} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
