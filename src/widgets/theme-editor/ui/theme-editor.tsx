import { EditThemePopover } from "@features/edit-theme-manually";
import { DeleteTheme } from "@features/delete-theme-manually";
import { TSelectedTheme } from "@entities/theme";

export const ThemeEditor = ({ themes }: { themes: TSelectedTheme[] }) => {
  return (
    <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 py-10">
      {themes.map((theme) => (
        <div key={theme.themeId} className="textarea-styles mb-4 rounded-xl font-medium last:mb-0">
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{theme.themeName}</p>

            <div className="flex items-center gap-3">
              <EditThemePopover theme={theme} />
              <DeleteTheme themeId={theme.themeId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
