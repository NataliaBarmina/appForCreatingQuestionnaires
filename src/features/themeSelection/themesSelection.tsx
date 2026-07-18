import { useTranslation } from "react-i18next";
import { ThemeList } from "./themeList";
import { CreationModeButton } from "@shared/types/commonTypes";
import { mainContainerStyles } from "./styles";
import { PopoverBlock } from "./popoverBlock";
import { TThemeSelection } from "./types";

export const ThemesSelection = ({ courseName, buttonID, selectedTopics }: TThemeSelection) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full bg-green-50">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {courseName}
      </h1>

      <div className={mainContainerStyles}>
        {(buttonID === CreationModeButton.AI || buttonID === CreationModeButton.MANUAL) && (
          <PopoverBlock courseName={courseName} />
        )}

        <ThemeList selectedTopics={selectedTopics} courseName={courseName} buttonID={buttonID} />
      </div>
    </div>
  );
};
