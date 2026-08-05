export const DeleteTheme = ({ themeId }: { themeId: string }) => {
  return (
    <>
      <button
        type="button"
        aria-label="Удалить тему"
        title="Удалить"
        onClick={() => alert(themeId)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v5" />
          <path d="M14 11v5" />
        </svg>
      </button>
    </>
  );
};
