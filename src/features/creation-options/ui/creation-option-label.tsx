export const CreationOptionLabel = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <span className="block">
      <span className="block text-base font-bold">{title}</span>
      <span className="mt-1 block text-base text-white/70">{subtitle}</span>
    </span>
  );
};
