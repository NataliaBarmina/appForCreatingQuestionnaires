import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import { useState } from "react";
import FormForCreatingQuestionsYourself from "./formForCreatingQuestionsYourself";
import { theme } from "../../common/themeForMaterialUI";

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

const CoursesSelection = () => {
  const arr = [
    {
      JavaScript: [
        {
          "тема 1": [
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
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      TypeScript: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      CSS: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      HTML: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      Git: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      React: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      Cmd: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
    {
      Прочее: [
        { "тема 1": [{}, {}] },
        { "тема 2": [{}, {}] },
        { "тема 3": [{}, {}] },
      ],
    },
  ];

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
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Box
          sx={{
            maxWidth: { xs: "98vw", md: "68vw", lg: "55vw" },
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
        <CustomTabPanel value={value} index={0}>
          Выберите тему из курса JavaScript
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          TypeScript
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          HTML
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          CSS
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Git
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Cmd
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          React
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          <FormForCreatingQuestionsYourself />
        </CustomTabPanel>
      </Box>
      {/* </div> */}
    </ThemeProvider>
  );
};
export default CoursesSelection;
