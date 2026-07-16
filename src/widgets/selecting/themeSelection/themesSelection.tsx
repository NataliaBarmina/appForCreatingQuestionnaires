import { useTranslation } from "react-i18next";
import { ThemeList } from "./themeList";
import { CreationModeButton } from "@shared/types/commonTypes";
import { mainContainerStyles } from "./styles";
import { PopoverBlock } from "./popoverBlock";
import { TSelectedTopic } from "./themeList";

type TThemeSelection = {
  courseName: string;
  buttonID: CreationModeButton;
  selectedTopics: TSelectedTopic[];
};

export const ThemesSelection = ({ courseName, buttonID, selectedTopics }: TThemeSelection) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full bg-green-50">
      <h1 className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {courseName}
      </h1>
      <div className={mainContainerStyles}>
        <ThemeList selectedTopics={selectedTopics} courseName={courseName} buttonID={buttonID} />

        {(buttonID === CreationModeButton.AI || buttonID === CreationModeButton.MANUAL) && (
          <PopoverBlock courseName={courseName} />
        )}
      </div>
    </div>
  );
};
