import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { EditAIGeneratedTheme } from "@features/edit-theme-generated-with-ai";

export const AIGeneratedThemesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const { courseName } = location.state;

  const savedThemes = sessionStorage.getItem("generatedThemes");
  const generatedThemes = savedThemes ? JSON.parse(savedThemes) : [];

  const [themes, setThemes] = useState<string[]>(generatedThemes);

  useEffect(() => {
    sessionStorage.setItem("generatedThemes", JSON.stringify(themes));
  }, [themes]);

  function deleteTheme(themeName: string) {
    setThemes((prevThemes) => prevThemes.filter((theme) => theme !== themeName));
  }

  useEffect(() => {
    if (!themes.length) navigate("/dashboard");
  });

  return (
    <>
      <h1>{t("editTheme.titleAI")}</h1>
      <h2>{t("header.course", { courseName })} </h2>
      <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 py-10">
        {themes.map((theme: string) => (
          <div key={theme}>
            <EditAIGeneratedTheme
              themeName={theme}
              deleteTheme={deleteTheme}
              courseName={courseName}
            />
          </div>
        ))}
      </div>
    </>
  );
};
