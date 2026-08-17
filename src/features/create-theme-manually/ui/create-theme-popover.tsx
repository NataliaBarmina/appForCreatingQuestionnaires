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
        className="border-none bg-green-800"
        style={{
          width: "calc(var(--radix-popover-trigger-width) * 2.3)",
        }}
      >
        <div className={formContainerStyles}>
          <div className="mb-5 flex items-center gap-4">
            <PlusCircleIcon />
            <h1 className="pt-0">{t("header.addTheme")}</h1>
          </div>
          <CreateThemeForm onSuccess={() => setOpen(false)} courseName={courseName} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
