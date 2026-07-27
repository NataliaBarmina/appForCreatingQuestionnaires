import { TCreationModeButton } from "@entities/model";
import { ThemeList } from "./themeList";
import { PopoverBlock } from "./popoverBlock";
import { TThemeSelection } from "../model/types";
import { mainContainerStyles } from "./styles";

export const ThemesSelection = ({ courseName, buttonID, selectedTopics }: TThemeSelection) => {
  return (
    <div className="mx-auto w-full">
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
