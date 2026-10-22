import { ErrorBoundary } from "react-error-boundary";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

//  для отображения запасного интерфейса, если будет ошибка загрузки

export const ErrorFallbackBoundary = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <div>
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div>
              <p className="mx-auto mt-[10rem] w-[60%] text-center text-xl text-pink-900">
                Здесь должен быть запасной интерфейс, потому что что-то пошло не так
              </p>
              <p
                lang="en"
                className="mx-auto mt-[2rem] w-full hyphens-auto px-2 text-center text-base text-pink-900"
              >
                {error instanceof Error ? error.message : String(error)}
              </p>
            </div>
          )}
        >
          {children}
        </ErrorBoundary>
      </div>
    </div>
  );
};
