import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@common/themeForMaterialUI";
import { useLocation } from "react-router-dom";
import ThemesSelection from "./themesSelection";
import { arr, TSubject, TTopic } from "@common/dataExample"; //todo: получаем доступ к стэйту - массиву с вопросами

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
type HandleTabChange = (event: React.SyntheticEvent, newValue: number) => void;

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
  const [tabValue, setTabValue] = useState(0);

  const handleChange: HandleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const courseNames: string[] = arr.map(
    (item: TSubject) => Object.keys(item)[0],
  );
  const selectedCourseName = courseNames[tabValue];
  const courseEntry = arr.find(
    (item) => Object.keys(item)[0] === selectedCourseName,
  );
  const courseThemes = courseEntry[selectedCourseName] ?? [];

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full pb-11">
        <div className="bg-stone-300 shadow-2xl shadow-stone-500">
          <div className="py-10 text-xl font-bold">Выберите курс</div>

          <TabsContainer
            tabValue={tabValue}
            courseNames={courseNames}
            handleChange={handleChange}
          />
        </div>
        <CustomTabPanelContainer
          tabValue={tabValue}
          selectedCourseName={selectedCourseName}
          courseThemes={courseThemes}
        />
      </div>
    </ThemeProvider>
  );
};
export default CoursesSelection;

type MyProps = {
  tabValue?: number;
  selectedCourseName?: string;
  courseThemes?: TTopic[];
  courseNames?: string[];
  handleChange?: HandleTabChange;
};

const TabsContainer = ({ tabValue, courseNames, handleChange }: MyProps) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "98vw", md: "68vw", lg: "55vw", xl: "100%" },
        display: "inline-block",
        margin: " auto",
      }}
    >
      <Tabs
        value={tabValue}
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
        {courseNames.map((item: string, index: number) => (
          <Tab
            sx={tabStyle}
            label={item} // перебор названий всех курсов
            key={index}
            id={`simple-tab-${index}`}
            aria-controls={`simple-tabpanel-${index}`}
          />
        ))}
      </Tabs>
    </Box>
  );
};

const CustomTabPanelContainer = ({
  tabValue,
  selectedCourseName,
  courseThemes,
}: MyProps) => {
  const location = useLocation();
  const buttonLabel = location.state?.buttonLabel.toLowerCase();

  return (
    <div>
      <CustomTabPanel value={tabValue} index={tabValue}>
        <ThemesSelection
          course={selectedCourseName} // название темы
          listOfThemes={courseThemes} // массив вопросов с темами
          buttonLabel={buttonLabel}
        />
      </CustomTabPanel>
    </div>
  );
};
