import { useState } from "react";

import { TSelectedTheme } from "@entities/theme";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui";
import { EditThemeForm } from "./edit-theme-form";

export const buttonStyle =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white";

export const EditThemePopover = ({
  theme,
  buttonID,
}: {
  theme: TSelectedTheme;
  buttonID: "EDIT" | "AI THEMES";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button title="pедактировать" className={buttonStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[45rem] rounded-2xl border-none p-0"
        side="bottom"
        align="end"
        alignOffset={-100}
        sideOffset={-70}
      >
        <EditThemeForm onClose={() => setOpen(false)} theme={theme} buttonID={buttonID} />
      </PopoverContent>
    </Popover>
  );
};
