import { EditThemePopover } from "@features/edit-theme";
import { DeleteThemeButton } from "@features/delete-theme";
import { TSelectedTheme } from "@entities/theme";

type TThemeEditor = { themes: TSelectedTheme[]; buttonID: "EDIT" | "THEMES_AI" };

export const ThemeEditor = ({ themes, buttonID }: TThemeEditor) => {
  return (
    <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 py-10">
      {themes.map((theme) => (
        <div key={theme.themeId} className="textarea-styles mb-4 rounded-xl font-medium last:mb-0">
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{theme.themeName}</p>

            <div className="flex items-center gap-3">
              {" "}
              <EditThemePopover theme={theme} buttonID={buttonID} />
              <DeleteThemeButton themeId={theme.themeId} buttonID={buttonID} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
