import { useState } from "react";

import { TSelectedTheme } from "@entities/theme";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui";
import { EditThemeForm } from "./edit-theme-form";
import { buttonStyle, popoverContentStyle } from "./styles";
import { PopoverTriggerIcon } from "./icons";

export const EditThemePopover = ({ theme }: { theme: TSelectedTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button title="Редактировать" className={buttonStyle}>
          <PopoverTriggerIcon />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={8}
        collisionPadding={{
          top: 104,
          right: 8,
          bottom: 8,
          left: 8,
        }}
        className={popoverContentStyle}
      >
        <EditThemeForm onClose={() => setOpen(false)} theme={theme} />
      </PopoverContent>
    </Popover>
  );
};
