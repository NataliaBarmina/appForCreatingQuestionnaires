import { useNavigate } from "react-router-dom";
import { Button } from "@shared/ui";

export const AIThemesCreation = ({ courseName }: { courseName: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="pt-0">с помощью искуственного интеллекта</h2>
      <p className="mx-auto mb-8 w-[90%] rounded-xl bg-green-800 p-12 text-white">
        "создай 10 тем по курсу {courseName}...."
      </p>
      <Button
        type="button"
        buttonLabel="отправить"
        onClick={() => navigate("/AICreatedThemes", { state: { courseName } })}
      ></Button>
    </>
  );
};
