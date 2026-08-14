import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@shared/ui";

export const AIThemesCreation = ({ courseName }: { courseName: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="pt-0">{t("generateTheme.withAI")}</h2>
      <p className="mx-auto mb-8 w-[90%] rounded-xl bg-green-800 p-12 text-white">
        "создай 10 тем по курсу {courseName}...."
      </p>
      <Button
        type="button"
        buttonLabel={t("generateTheme.generate")}
        onClick={() => navigate("/AICreatedThemes", { state: { courseName } })}
      ></Button>
    </>
  );
};
