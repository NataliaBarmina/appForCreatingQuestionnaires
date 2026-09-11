import { useState } from "react";
import { DeleteThemeButton } from "./delete-theme-button";
import { DeleteThemeAlertDialog } from "./delete-theme-alert-dialog";

export const DeleteTheme = ({ themeId }: { themeId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DeleteThemeButton open={isOpen} onOpenChange={setIsOpen} />
      <DeleteThemeAlertDialog themeId={themeId} open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};
