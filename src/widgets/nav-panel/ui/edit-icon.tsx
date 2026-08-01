import type { SVGProps } from "react";

export const EditIcon = ({ width = 60, height = 60, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Скруглённая рамка */}
      <rect x="5" y="5" width="54" height="54" rx="13" stroke="currentColor" strokeWidth="2" />

      {/* Перо */}
      <path
        d="
          M32 16
          L44 37
          L32 49
          L20 37
          Z
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Центральная линия пера */}
      <path d="M32 16V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Центральное отверстие пера */}
      <circle cx="32" cy="36" r="3" stroke="currentColor" strokeWidth="2" />

      {/* Нижняя линия */}
      <path d="M24 45H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
