import { Tabs, Tab, Box, ThemeProvider } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import { useState } from "react";
import FormForCreatingQuestionsYourself from "./formForCreatingQuestionsYourself";
import { theme } from "../../common/themeForMaterialUI";

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
      <div className="mt-10 w-full">
        <TabContext value={value}>
          <div className="mx-auto inline-block">
            <Box
              sx={{
                maxWidth: { xs: "98vw", md: "68vw", lg: "55vw" },
              }}
            >
              <Tabs
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#000",
                    height: "3px",
                  },
                }}
                // value={value}
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
                    value={String(index + 1)}
                  />
                ))}
              </Tabs>
            </Box>
          </div>
          <TabPanel value="1">JavaScript</TabPanel>
          <TabPanel value="2">TypeScript</TabPanel>
          <TabPanel value="3">CSS</TabPanel>
          <TabPanel value="4">HTML</TabPanel>
          <TabPanel value="5">Git</TabPanel>
          <TabPanel value="6">Cmd</TabPanel>
          <TabPanel value="7">React</TabPanel>
          <TabPanel value="8">
            <FormForCreatingQuestionsYourself />
          </TabPanel>
        </TabContext>
      </div>
    </ThemeProvider>
  );
};
export default CoursesSelection;
