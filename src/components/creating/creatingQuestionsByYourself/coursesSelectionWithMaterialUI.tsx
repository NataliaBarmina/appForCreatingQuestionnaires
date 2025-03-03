import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@common/themeForMaterialUI";
import { useLocation } from "react-router-dom";
import ThemesSelection from "./themesSelection";
import { arr, Subject } from "@common/dataExample";

//TODO:! нужно проверить адаптивность верстки

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const tabStyle = {
  bgcolor: "background.paper",
  border: "2px solid grey",
  borderTopRightRadius: "15px",
  borderTopLeftRadius: "15px",
  fontWeight: 600,
  fontSize: "0.8rem",
  minWidth: "5rem",
  ":hover": {
    backgroundColor: "#e09a80",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
  },
  ":focus": {
    backgroundColor: "#e9967a",
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

const CoursesSelectionWithMaterialUI = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const location = useLocation();
  const buttonName = location.state?.buttonName;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          paddingTop: "30px",
          paddingBottom: "35px",
        }}
      >
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
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {arr.map((item: Subject, index: number) => (
              <Tab
                sx={tabStyle}
                label={Object.keys(item)[0]}
                key={index}
                id={`simple-tab-${index}`}
                aria-controls={`simple-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
        {arr.map((item: Subject, index: number) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <ThemesSelection
              themeOfCourse={Object.keys(item)}
              listOfThemes={Object.values(item)[0]}
              buttonName={buttonName}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
};
export default CoursesSelectionWithMaterialUI;

//! образец как можно менять свойства, если sx не разрешен
// import { styled } from "@mui/system";
// const CustomStyledTabPanel = styled(CustomTabPanel)(({ theme }) => ({
//   backgroundColor: "red", // Пример для изменения фона
//   padding: "20px", // Пример для изменения отступов
//   borderRadius: "8px", // Пример для изменения углов
// }));
