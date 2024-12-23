interface ComponentProps {
  value: string;
}

export const RoundLabel = ({ value }: ComponentProps) => {
  return (
    <div className="mb-3 h-9 w-9 rounded-full border-4 border-solid border-blue-200 bg-blue-100">
      <div className="text-base leading-7">{value}</div>
    </div>
  );
};
