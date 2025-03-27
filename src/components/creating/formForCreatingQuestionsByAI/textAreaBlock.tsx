import { Textarea, MyProps } from "@commonComponents/createFields";

export const TextAreaBlock = ({
  placeholder,
  fieldName,
  register,
  error,
}: MyProps) => {
  return (
    <div>
      <div className="mx-auto">
        <Textarea
          placeholder={placeholder}
          register={register}
          fieldName={fieldName}
          styles=""
        />

        {error && (
          <p className="mx-auto w-[90%] bg-blue-100 text-xl font-bold text-pink-900">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
};
export default TextAreaBlock;
