import { headerStyle, containerStyle } from "./styles";
import { LanguageSwitcher } from "./languageSwitcher";

export const Header = () => {
  return (
    <div>
      {/* чтобы текст не прятался под зеленую полосу вводим доп контейнер: */}
      <div className={containerStyle}>
        <div className={headerStyle}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
