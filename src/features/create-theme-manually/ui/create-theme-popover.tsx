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
        className="max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] overflow-y-auto rounded-2xl border-none bg-green-800 p-0 sm:w-[min(32rem,calc(100vw-2rem))] lg:w-[min(38rem,calc(100vw-2rem))] xl:w-[min(45rem,calc(100vw-2rem))]"
        side="bottom"
        align="center"
        sideOffset={8}
        collisionPadding={16}
      >
        <div className={formContainerStyles}>
          <div className="flex items-center gap-2 pb-4 pt-4 sm:gap-4 sm:pb-6">
            <PlusCircleIcon />
            <h1 className="min-w-0 text-lg sm:text-xl">{t("header.addTheme")}</h1>
          </div>
          <CreateThemeForm onSuccess={() => setOpen(false)} courseName={courseName} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
