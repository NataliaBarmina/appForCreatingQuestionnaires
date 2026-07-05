export const FieldsError = ({ message }: { message?: string }) => {
  return (
    <>
      <p className="mx-auto mb-2 w-[60%] text-center text-xl font-bold text-pink-900">{message}</p>
    </>
  );
};
