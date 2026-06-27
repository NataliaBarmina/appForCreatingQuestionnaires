import { errorStyles } from "./styles";

export const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div>
      <span className={errorStyles}>{message}</span>
    </div>
  );
};
