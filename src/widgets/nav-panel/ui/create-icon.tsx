import type { SVGProps } from "react";

export const CreateIcon = ({ width = 60, height = 60, ...props }: SVGProps<SVGSVGElement>) => {
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

      {/* Большая искра */}
      <path
        d="
          M29 17
          C30.2 23.5 33.5 26.8 40 28
          C33.5 29.2 30.2 32.5 29 39
          C27.8 32.5 24.5 29.2 18 28
          C24.5 26.8 27.8 23.5 29 17
          Z
        "
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Маленькая искра */}
      <path
        d="
          M44 18
          C44.5 21 46 22.5 49 23
          C46 23.5 44.5 25 44 28
          C43.5 25 42 23.5 39 23
          C42 22.5 43.5 21 44 18
          Z
        "
        fill="currentColor"
      />

      {/* Знак плюс */}
      <path d="M45 39V49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <path d="M40 44H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
