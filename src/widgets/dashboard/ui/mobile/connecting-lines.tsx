export const ConnectingLines = () => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 320 600"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Верхняя плавная дуга: первый → второй круг */}
      <path
        d="
    M 165 88
              C 250 87, 320 147, 306 208
              C 300 240, 268 270, 244 280
  "
        stroke="rgb(138, 185, 175)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />

      {/* Нижняя плавная дуга: второй → третий круг */}
      <path
        d="
     M 110 306
    C 65 325, 30 350, 18 385
    C -5 445, 55 495, 110 510
    C 135 517, 165 516, 190 516
  "
        stroke="rgb(138, 185, 175)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
    </svg>
  );
};
