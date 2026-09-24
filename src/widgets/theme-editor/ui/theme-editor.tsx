import { EditThemePopover } from "@features/edit-theme-manually";
import { DeleteTheme } from "@features/delete-theme-manually";
import { TSelectedTheme } from "@entities/theme";

export const ThemeEditor = ({ themes }: { themes: TSelectedTheme[] }) => {
  return (
    <div className="mx-auto mt-8 w-full bg-green-800 px-2 py-4 s:py-10 lg:w-[90%] lg:rounded-xl">
      {themes.map((theme) => (
        <div
          key={theme.themeId}
          className="textarea-styles mx-auto mb-4 w-[95%] rounded-xl p-2 last:mb-0 sm:w-[90%] md:w-[85%]"
        >
          <div className="flex flex-row items-center justify-between gap-2">
            <p lang="ru" className="hyphens-auto text-[0.9rem] font-medium s:text-[1rem]">
              {theme.themeName}
            </p>

            <div className="flex items-center gap-2">
              <EditThemePopover theme={theme} />
              <DeleteTheme themeId={theme.themeId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
