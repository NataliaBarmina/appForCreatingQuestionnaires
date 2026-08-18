import { DeleteThemeIcon } from "./delete-theme-icon";

// todo - в зависимости от значения buttonID делать разные действия - работать с файрбэйз или локал сторадж

export const buttonStyle =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white";

export const DeleteThemeButton = ({ themeId, buttonID }: { themeId: string; buttonID: string }) => {
  return (
    <>
      <button type="button" title="yдалить" onClick={() => alert(themeId)} className={buttonStyle}>
        <DeleteThemeIcon />
      </button>
    </>
  );
};
