import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient, useQuery, skipToken } from "@tanstack/react-query";

import { queryKeys } from "@shared/query-keys-factory";
import { EditAIGeneratedTheme } from "@features/edit-themes-generated-with-ai";

export const AIGeneratedThemesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();
  const { courseName } = location.state;

  const { data: themes = [] } = useQuery<string[]>({
    queryKey: queryKeys.generatedThemesByCourse(courseName),
    queryFn: skipToken,
  });

  const deleteTheme = (themeName: string) => {
    queryClient.setQueryData<string[]>(
      queryKeys.generatedThemesByCourse(courseName),
      (prevThemes = []) => prevThemes.filter((theme) => theme !== themeName)
    );
  };

  useEffect(() => {
    if (!themes.length) navigate("/dashboard");
  }, [themes.length, navigate]);

  return (
    <>
      <h1>{t("editTheme.titleAI")}</h1>
      <h2>{t("header.course", { courseName })} </h2>
      <div className="mx-auto w-full bg-green-800 px-4 py-10 s:mt-8 md:w-[90%] md:rounded-xl md:px-12">
        {themes?.map((theme: string) => (
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
