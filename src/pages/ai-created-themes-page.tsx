import { useLocation } from "react-router-dom";

export const AICreatedThemesPage = () => {
  const location = useLocation();

  const { courseName } = location.state;
  return (
    <>
      <h1>Темы созданные с помощью искуственного интеллекта по курсу {courseName}</h1>
    </>
  );
};
