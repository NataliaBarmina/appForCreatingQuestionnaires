import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";
import { sectionStyles, sectionTitleStyles } from "./styles";

type TAdditionalWishes = {
  additionalPrompt: string;
  setAdditionalPrompt: (additionalPrompt: string) => void;
};

export const AdditionalWishes = ({ additionalPrompt, setAdditionalPrompt }: TAdditionalWishes) => {
  const { t } = useTranslation();

  return (
    <div className={sectionStyles}>
      <label htmlFor="additionalPrompt" className={sectionTitleStyles}>
        {t("generateQuestions.preferences.title")}
      </label>

      <textarea
        id="additionalPrompt"
        value={additionalPrompt}
        onChange={(event) => setAdditionalPrompt(event.target.value)}
        placeholder={t("generateQuestions.preferences.placeholder")}
        className={cn(
          "min-h-[130px] w-full bg-[#0000001A] px-5 py-4",
          "resize-y outline-none transition",
          "rounded-2xl border-2 border-white/20",
          "text-base leading-7 text-white",
          "placeholder:text-white/40 focus:border-[#e3a0a7]"
        )}
      />
    </div>
  );
};
