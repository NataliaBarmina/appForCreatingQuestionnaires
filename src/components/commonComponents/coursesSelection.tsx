import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@common/themeForMaterialUI";
import { useLocation } from "react-router-dom";
import ThemesSelection from "./themesSelection";
import { arr, Subject } from "@common/dataExample"; //todo: получаем доступ к стэйту - массиву с вопросами

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const tabStyle = {
  backgroundColor: "#767474",
  borderTopRightRadius: "15px",
  borderTopLeftRadius: "15px",
  marginRight: "1px",
  fontWeight: 600,
  fontSize: "0.8rem",
  minWidth: "5rem",
  color: "#C3C3C3",
  ":hover": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 35px rgb(28,25,23)",
    color: "black",
  },
  ":focus": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 15px rgb(28,25,23)",
    color: "black",
  },
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const CoursesSelection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation();
  const buttonName = location.state?.buttonName.toLowerCase();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          paddingBottom: "45px",
        }}
      >
        <div className="bg-stone-300 shadow-2xl shadow-stone-500">
          <div className="py-10 text-xl font-bold">Выберите курс</div>
          <Box
            sx={{
              maxWidth: { xs: "98vw", md: "68vw", lg: "55vw" },
              display: "inline-block",
              margin: " auto",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "black",
                },
              }}
            >
              {arr.map((item: Subject, index: number) => (
                <Tab
                  sx={tabStyle}
                  label={Object.keys(item)[0]} // перебор названий всех курсов
                  key={index}
                  id={`simple-tab-${index}`}
                  aria-controls={`simple-tabpanel-${index}`}
                />
              ))}
            </Tabs>
          </Box>
        </div>

        {arr.map((item: Subject, index: number) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <ThemesSelection
              course={Object.keys(item)} // название темы
              listOfThemes={Object.values(item)[0]} // массив вопросов с темами
              buttonName={buttonName}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
};
export default CoursesSelection;

//! образец как можно менять свойства, если sx не разрешен
// import { styled } from "@mui/system";
// const CustomStyledTabPanel = styled(CustomTabPanel)(({ theme }) => ({
//   backgroundColor: "red", // Пример для изменения фона
//   padding: "20px", // Пример для изменения отступов
//   borderRadius: "8px", // Пример для изменения углов
// }));
