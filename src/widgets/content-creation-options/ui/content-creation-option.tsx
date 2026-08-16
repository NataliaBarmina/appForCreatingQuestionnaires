import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { baseButtonStyles, centralCircleStyles, containerStyles } from "./styles";
import { creationOptions } from "../config/creation-option";

export const ContentCreationOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-center pt-16">
      <div className={containerStyles}>
        {creationOptions.map((option) => (
          <button
            key={option.buttonID}
            type="button"
            onClick={() => navigate(option.path, { state: { buttonID: option.buttonID } })}
            className={`${baseButtonStyles} ${option.positionClasses} `}
          >
            <div className="flex flex-col items-center justify-evenly">
              <option.Icon />
              <p className="text-2xl font-medium">{t(option.title)}</p>
              <p className="mt-1 text-lg">{t(option.subtitle)}</p>
            </div>
          </button>
        ))}

        <div aria-hidden="true" className={centralCircleStyles}></div>
      </div>
    </div>
  );
};
