import { EditIcon } from "./icon";

export const buttonStyle =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white";

export const EditTheme = ({ themeId }: { themeId: string }) => {
  return (
    <button
      type="button"
      aria-label="Редактировать тему"
      title="Редактировать"
      onClick={() => alert(themeId)}
      className={buttonStyle}
    >
      <EditIcon />
    </button>
  );
};
