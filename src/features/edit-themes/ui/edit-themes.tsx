import { TSelectedTheme } from "@entities/theme";
import { EditIcon, DeleteIcon } from "./icons";

type TEditThemes = { themes: TSelectedTheme[] };

export const buttonStyle =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white";

export const EditThemes = ({ themes }: TEditThemes) => {
  return (
    <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 pt-10">
      {themes.map((theme) => (
        <div key={theme.themeId} className="textarea-styles mb-4 rounded-lg font-medium">
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{theme.themeName}</p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Редактировать тему"
                title="Редактировать"
                onClick={() => alert(theme.themeId)}
                className={buttonStyle}
              >
                <EditIcon />
              </button>

              <button
                type="button"
                aria-label="Удалить тему"
                title="Удалить"
                onClick={() => alert(theme.themeId)}
                className={buttonStyle}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
