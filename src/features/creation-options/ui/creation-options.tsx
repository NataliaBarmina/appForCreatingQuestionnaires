import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { baseButtonClasses } from "./styles";
import { CreationOptionLabel } from "./creation-option-label";
import { creationOptions } from "../config/creation-option";

export const CreationOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {creationOptions.map((option) => (
        <button
          key={option.buttonID}
          type="button"
          onClick={() => navigate(option.path, { state: { buttonID: option.buttonID } })}
          className={`${baseButtonClasses} ${option.positionClasses} `}
        >
          <option.Icon />

          <CreationOptionLabel title={t(option.title)} subtitle={t(option.subtitle)} />
        </button>
      ))}
    </>
  );
};
