import { CircularProgress } from "@mui/material";

export const Preloader = () => {
  return (
    <div className="pt-10">
      <CircularProgress color="secondary" size="5rem" />
    </div>
  );
};
