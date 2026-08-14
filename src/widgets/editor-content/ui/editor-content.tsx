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
      {editorOptions.map((option) => {
        const { path, text, Icon, header, buttonID } = option;
        return (
          <div key={text} className={contentStyles}>
            <div className="mb-8 flex justify-center">
              <Icon />
            </div>
            <p className={headerStyle}>
              {t("navigation.editing")}
              <br />
              {t(header)}
            </p>

            <div className={lineStyles} />

            <p className={textStyles}>
              {t("editTheme.edit")} <br /> {t("editTheme.delete")} <br /> {t(text)}
            </p>

            <div className="mr-4 flex justify-end">
              <button
                type="button"
                onClick={() => navigate(path, { state: { buttonID } })}
                className={chevronButtonStyles}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
