import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ChevronRightIcon } from "./icons";
import { editorOptions } from "../config/editor-options";
import {
  headerStyle,
  containerStyles,
  lineStyles,
  contentStyles,
  textStyles,
  chevronButtonStyles,
} from "./styles";

export const EditorContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={containerStyles}>
      {editorOptions.map((option) => (
        <div className={contentStyles}>
          <div className="mb-8 flex justify-center">
            <option.icon />
          </div>
          <p className={headerStyle}>
            {t("buttonLabel.editing")}
            <br />
            {t(option.header)}
          </p>

          <div className={lineStyles} />

          <p className={textStyles}>
            {t("header.edit")} <br /> {t("header.delete")} <br /> {t(option.text)}
          </p>

          <div className="mr-4 flex justify-end">
            <button
              type="button"
              onClick={() => navigate(option.path)}
              className={chevronButtonStyles}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
