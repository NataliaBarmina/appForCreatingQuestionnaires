import { CircularProgress } from "@mui/material";

const Preloader = () => {
  return (
    <div className="pt-10">
      <CircularProgress color="secondary" size="5rem" />
    </div>
  );
};

export default Preloader;
