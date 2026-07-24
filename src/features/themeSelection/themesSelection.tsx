import { useTranslation } from "react-i18next";
import { ThemeList } from "./themeList";
import { TCreationModeButton } from "@entities/model/creation-mode-button";
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
        <ThemeList selectedTopics={selectedTopics} courseName={courseName} buttonID={buttonID} />

        {(buttonID === TCreationModeButton.AI_QUESTIONS ||
          buttonID === TCreationModeButton.MANUAL_QUESTIONS) && (
          <PopoverBlock courseName={courseName} />
        )}
      </div>
    </div>
  );
};
