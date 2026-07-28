import { CreationMode } from "@entities/model";
import { ThemeList } from "./theme-list";
import { PopoverBlock } from "./popover-block";
import { TThemeSelection } from "../model/types";
import { mainContainerStyles } from "./styles";

export const ThemesSelection = ({ courseName, buttonID, selectedTopics }: TThemeSelection) => {
  return (
    <div className="mx-auto w-full">
      <div className={mainContainerStyles}>
        <ThemeList selectedTopics={selectedTopics} courseName={courseName} buttonID={buttonID} />

        {(buttonID === CreationMode.AI_QUESTIONS || buttonID === CreationMode.MANUAL_QUESTIONS) && (
          <PopoverBlock courseName={courseName} />
        )}
      </div>
    </div>
  );
};
