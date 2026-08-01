import type { SVGProps } from "react";

export const SurveyIcon = ({ width = 60, height = 60, ...props }: SVGProps<SVGSVGElement>) => {
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

      {/* Первая галочка */}
      <path
        d="M17 22L21 26L27 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Первая строка */}
      <path d="M32 23H47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Вторая галочка */}
      <path
        d="M17 33L21 37L27 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Вторая строка */}
      <path d="M32 34H47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Третья галочка */}
      <path
        d="M17 44L21 48L27 41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Третья строка */}
      <path d="M32 45H47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
