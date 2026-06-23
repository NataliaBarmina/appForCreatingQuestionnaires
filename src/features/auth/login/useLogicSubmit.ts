import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler } from "react-hook-form";
import type { FirebaseError } from "firebase/app";
import { auth } from "@appFirebase";
import { SHARED_EMAIL, keyByCode } from "./constants";
import { TAuthForm } from "./useLogicSchema";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

type TUseLogicSubmit = {
  reset: () => void;
  setError: (value: string | null) => void;
};

export const useLogicSubmit = ({ reset, setError }: TUseLogicSubmit) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<TAuthForm> = useCallback(
    async ({ password }) => {
      setError(null);

      try {
        await signInWithEmailAndPassword(auth, SHARED_EMAIL, password);
        navigate("/dashboardPage");
      } catch (e: any) {
        const err = e as FirebaseError;
        setError(t(keyByCode[err.code] ?? "error.auth"));
      } finally {
        reset();
      }
    },
    [reset, setError]
  );
  return { onSubmit };
};
