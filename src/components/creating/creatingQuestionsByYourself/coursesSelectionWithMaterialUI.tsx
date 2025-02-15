import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "../../../common/themeForMaterialUI";
import ThemesSelection from "./themesSelection";

//! нужно проверить адаптивность верстки

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const arr = [
  {
    JavaScript: [
      {
        "тема 1 JS": [
          {
            "вопрос 1": {
              вопрос:
                "К какому типу данных преобразует значение функция alert?",
              "правильный ответ": "к строке",
              "неправильный ответ 1": "к числу",
              "неправильный ответ 2": "к символу",
            },
          },
          {},
        ],
      },
      { "тема 2 JS": [{}, {}] },
      { "тема 3 JS": [{}, {}] },
    ],
  },
  {
    TypeScript: [
      { "тема 1 TS": [{}, {}] },
      { "тема 2 TS": [{}, {}] },
      { "тема 3 TS": [{}, {}] },
    ],
  },
  {
    CSS: [
      { "тема 1 CSS": [{}, {}] },
      { "тема 2 CSS": [{}, {}] },
      { "тема 3 CSS": [{}, {}] },
    ],
  },
  {
    HTML: [
      { "тема 1 HTML": [{}, {}] },
      { "тема 2 HTML": [{}, {}] },
      { "тема 3 HTML": [{}, {}] },
    ],
  },
  {
    Git: [
      { "тема 1 Git": [{}, {}] },
      { "тема 2 Git": [{}, {}] },
      { "тема 3 Git": [{}, {}] },
    ],
  },
  {
    React: [
      { "тема 1 React": [{}, {}] },
      { "тема 2 React": [{}, {}] },
      { "тема 3 React": [{}, {}] },
    ],
  },
  {
    Cmd: [
      { "тема 1 Cmd": [{}, {}] },
      { "тема 2 Cmd": [{}, {}] },
      { "тема 3 Cmd": [{}, {}] },
    ],
  },
  {
    Прочее: [
      { "тема 1 Прочее": [{}, {}] },
      { "тема 2 Прочее": [{}, {}] },
      { "тема 3 Прочее": [{}, {}] },
    ],
  },
];

const CoursesSelectionWithMaterialUI = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "98vw", md: "68vw", lg: "55vw" },
            display: "inline-block",
            margin: "o auto",
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
            {arr.map((item: any, index: number) => (
              <Tab
                sx={tabStyle}
                label={Object.keys(item)[0]}
                key={index}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>

        {arr.map((item: any, index: number) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <ThemesSelection value={item} />
          </CustomTabPanel>
        ))}
      </Box>
    </ThemeProvider>
  );
};
export default CoursesSelectionWithMaterialUI;
