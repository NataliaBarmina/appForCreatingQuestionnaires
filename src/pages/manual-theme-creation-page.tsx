import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CreateThemeForm } from "@features/create-theme-manually";

export const ManualThemeCreationPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const { course } = location.state;

  return (
    <>
      <h1>{t("createTheme.title")}</h1>
      <h2>{t("createTheme.forCourse", { course })}</h2>
      <div className="md:[85%] mx-auto mt-10 w-[100%] rounded-lg bg-green-800 px-4 pb-10 pt-14 sm:w-[90%]">
        <CreateThemeForm courseName={course} />{" "}
      </div>
    </>
  );
};
