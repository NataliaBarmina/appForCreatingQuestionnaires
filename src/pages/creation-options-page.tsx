import { cn } from "@shared/chadcn/lib/utils";
import { useTranslation } from "react-i18next";

import { CreationOptions } from "@features/creation-options";

export const CreationOptionsPage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <h1 className="mb-8 text-center text-2xl font-bold text-slate-900">
        {t("header.creatingQuestionsAndTopics")}
      </h1>
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 z-50",
          "aspect-square w-[30%]",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-full border-[3px] border-white/80",
          "bg-linear-to-br bg-[#547776] from-white/15 to-black/10",
          "shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(0,0,0,0.1)]"
        )}
      >
        <CreationOptions />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 z-50",
            "aspect-square w-[30%]",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-full border-[3px] border-white/80",
            "bg-linear-to-br bg-[#547776] from-white/15 to-black/10",
            "shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(0,0,0,0.1)]"
          )}
        ></div>
      </div>
    </main>
  );
};
