import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient, useQuery } from "@tanstack/react-query";

import { EditAIGeneratedTheme } from "@features/edit-themes-generated-with-ai";

export const AIGeneratedThemesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();
  const { courseName } = location.state;

  const { data: themes = [] } = useQuery<string[]>({
    queryKey: ["generatedThemes", courseName],
    queryFn: async () => [],
    enabled: false, // queryFn не запускается автоматически — запускаем вручную через refetch()
  });

  function deleteTheme(themeName: string) {
    queryClient.setQueryData<string[]>(["generatedThemes", courseName], (prevThemes = []) =>
      prevThemes.filter((theme) => theme !== themeName)
    );
  }

  useEffect(() => {
    if (!themes.length) navigate("/dashboard");
  }, [themes.length, navigate]);

  return (
    <>
      <h1>{t("editTheme.titleAI")}</h1>
      <h2>{t("header.course", { courseName })} </h2>
      <div className="mx-auto mt-8 w-[90%] rounded-xl bg-green-800 px-12 py-10">
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
