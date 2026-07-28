import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { baseButtonStyles, centralCircleStyles, buttonStyles } from "./styles";
import { CreationOptionLabel } from "./creation-option-label";
import { creationOptions } from "../config/creation-option";

export const CreationOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-center pt-16">
      <div className={buttonStyles}>
        {creationOptions.map((option) => (
          <button
            key={option.buttonID}
            type="button"
            onClick={() => navigate(option.path, { state: { buttonID: option.buttonID } })}
            className={`${baseButtonStyles} ${option.positionClasses} `}
          >
            <option.Icon />

            <CreationOptionLabel title={t(option.title)} subtitle={t(option.subtitle)} />
          </button>
        ))}

        <div aria-hidden="true" className={centralCircleStyles}></div>
      </div>
    </div>
  );
};
