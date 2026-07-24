export const FieldsError = ({ message, styles = "" }: { message: string; styles?: string }) => {
  return (
    <>
      <p className={`${styles} mx-auto mb-2 w-[60%] text-center text-xl font-bold text-pink-900`}>
        {message}
      </p>
    </>
  );
};
