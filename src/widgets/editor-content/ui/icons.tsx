import { cn } from "@shared/lib";

const iconStyles = "size-24 fill-none stroke-[#9df1cf]/70 stroke-[2]";

export const QuestionIcon = () => (
  <svg viewBox="14.5 5.5 43 43" aria-hidden="true" className={cn(iconStyles, "stroke-[1.3]")}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19 43 3-10L44 11l9 9-22 22-12 1Z" />

    <path strokeLinecap="round" strokeLinejoin="round" d="m38 17 9 9" />
  </svg>
);

export const TopicsIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={iconStyles}>
    <rect x="27" y="7" width="10" height="10" rx="2" />

    <rect x="7" y="45" width="10" height="10" rx="2" />

    <rect x="27" y="45" width="10" height="10" rx="2" />

    <rect x="47" y="45" width="10" height="10" rx="2" />

    <path strokeLinecap="round" strokeLinejoin="round" d="M32 17v13" />

    <path strokeLinecap="round" strokeLinejoin="round" d="M12 45v-8h40v8" />

    <path strokeLinecap="round" strokeLinejoin="round" d="M32 30v15" />
  </svg>
);

export const ChevronRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9df1cf"
      strokeWidth="2.2"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
};
