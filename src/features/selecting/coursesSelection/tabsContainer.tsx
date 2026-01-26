import { TCoursesSelection } from "./types";
import { Tabs, Tab } from "@mui/material";
import { tabStyle, tabsStyle } from "./styles";

const TabsContainer = ({
  tabValue,
  courseNames,
  handleChange,
}: TCoursesSelection) => {
  return (
    <div className="mx-auto flex w-full justify-center">
      <div className="xs:w-[98vw] md:w-[68vw] lg:w-[55vw] xl:w-[40vw]">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{ tabsStyle }}
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
      </div>
    </div>
  );
};
export default TabsContainer;
