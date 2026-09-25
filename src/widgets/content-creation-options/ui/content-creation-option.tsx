import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { baseButtonStyles, centralCircleStyles, containerStyles } from "./styles";
import { creationOptions } from "../config/creation-option";

export const ContentCreationOptions = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex w-full justify-center">
      <div className={containerStyles}>
        {creationOptions.map((option) => (
          <button
            key={option.buttonID}
            type="button"
            onClick={() => navigate(option.path, { state: { buttonID: option.buttonID } })}
            className={`${baseButtonStyles} ${option.positionClasses} `}
          >
            <div className="flex justify-center">
              <option.Icon />
            </div>
            <p className="mx-auto text-[1.2rem] font-medium leading-none s:text-[1.4rem] s:leading-normal">
              {t(option.title)}
            </p>
            <p className="mt-1 text-[0.9rem] s:text-[1rem]">{t(option.subtitle)}</p>
          </button>
        ))}

        <div aria-hidden="true" className={centralCircleStyles}></div>
      </div>
    </div>
  );
};
