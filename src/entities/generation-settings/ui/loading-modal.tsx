import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

export const LoadingModal = ({ message }: { message: string }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/30">
      <div className="w-[430px] rounded-[20px] border border-blue-50 bg-[#5f8582] px-10 py-12 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
        <div className="flex flex-col items-center">
          <Sparkles className="mb-7 size-16 animate-pulse text-[#ff9d9d]" strokeWidth={1.7} />

          <h3 className="mb-3 text-2xl font-semibold text-white">{message}</h3>

          <p className="mb-9 text-base text-white/75">{t("generateTheme.mayTakeAFewSeconds")}</p>

          <div className="h-[5px] w-full overflow-hidden rounded-full bg-blue-50/20">
            <div className="h-full w-2/5 animate-pulse rounded-full bg-[#ff9d9d]" />
          </div>
        </div>
      </div>
    </div>
  );
};
