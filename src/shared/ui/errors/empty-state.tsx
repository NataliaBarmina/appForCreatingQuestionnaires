import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";

export const EmptyState = ({ message }: { message: string }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="mt-32">
      <div className="mb-6 flex justify-center text-lg text-pink-900">
        <div className="w-[60%]">
          <p className="mb-4 font-bold">{message}</p>
          <p>{t("emptyState.reloadPage")}</p>
          <p>{t("emptyState.orGoToPage")}</p>
          <p>{t("emptyState.creatingQuestionsAndTopics")}</p>
        </div>
      </div>
      <Button
        buttonLabel={t("buttonLabel.goTo")}
        type="button"
        onClick={() => navigate("/themesCreation")}
      />
    </div>
  );
};
