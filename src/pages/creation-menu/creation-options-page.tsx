import { CreationOptions } from "@features/creation-options/ui/creation-options";
import { cn } from "@shared/chadcn/lib/utils";
import { useTranslation } from "react-i18next";

const containerStyles = "flex min-h-screen flex-col items-center pt-16";

const headerClasses = "mb-8 text-center text-2xl font-bold text-slate-900";

const mainCircleClasses = cn(
  "relative isolate aspect-square w-full max-w-[600px] rounded-full ",
  "border-8 border-solid border-[#496b6b] bg-[#496b6b]",
  "shadow-[0_20px_45px_rgba(21,33,33,0.22),inset_0_0_0_1px_rgba(255,255,255,0.08)]"
);

const CentralCirceClasses = cn(
  "pointer-events-none absolute left-1/2 top-1/2 z-50",
  "w-[30%] aspect-square",
  "-translate-x-1/2 -translate-y-1/2 ",
  "rounded-full border-[3px] border-white/80",
  "bg-[#547776] bg-linear-to-br from-white/15 to-black/10",
  "shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(0,0,0,0.1)]"
);

export const CreationOptionsPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <main className={containerStyles}>
        <h1 className={headerClasses}>{t("header.creatingQuestionsAndTopics")}</h1>
        <div className={mainCircleClasses}>
          <CreationOptions />

          <div aria-hidden="true" className={CentralCirceClasses}></div>
        </div>
      </main>
    </div>
  );
};
