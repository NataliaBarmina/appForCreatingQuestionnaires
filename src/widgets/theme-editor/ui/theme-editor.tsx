import { EditTheme } from "@features/edit-theme";
import { DeleteTheme } from "@features/delete-theme";
import { TSelectedTheme } from "@entities/theme";

type TThemeEditor = { themes: TSelectedTheme[]; buttonID: string };

// todo - в зависимости от значения buttonID делать разные действия - работать с файрбэйз или локал сторадж

export const ThemeEditor = ({ themes, buttonID }: TThemeEditor) => {
  console.log(buttonID);

  return (
    <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 py-10">
      {themes.map((theme) => (
        <div key={theme.themeId} className="textarea-styles mb-4 rounded-xl font-medium last:mb-0">
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{theme.themeName}</p>

            <div className="flex items-center gap-3">
              <EditTheme themeId={theme.themeId} />
              <DeleteTheme themeId={theme.themeId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
