import { classesForHead } from "./styles";
import LanguageSwitcher from "../languageSwitcher";

const Header = () => {
  return (
    <div>
      {/* чтобы текст не прятался под зеленую полосу вводим доп контейнер: */}
      <div className="md:h-[12vh] md:w-[100%]">
        <div className={classesForHead}>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Header;
