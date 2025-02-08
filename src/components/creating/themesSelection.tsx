import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface MyProps {
  value: any;
}

const ThemesSelection = ({ value }: MyProps) => {
  const themeOfCourse = Object.keys(value);
  const listOfThemes: any = Object.values(value)[0];
  return (
    <div>
      <div className="py-8 text-xl font-bold">
        Выберите тему из курса {themeOfCourse}
      </div>

      {/* {listOfThemes.map((item: any, index: number) => (
        <div key={index}>{Object.keys(item)}</div>
      ))} */}
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          bgcolor: "rgb(47,79,79)",
          paddingTop: "20px",
          borderRadius: "15px",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {listOfThemes.map((item: any, index: number) => (
              <ListItem
                disablePadding
                key={index}
                sx={{
                  border: "4px solid rgb(180, 209, 210)",
                  bgcolor: "rgb(240,248,255)",
                  width: "90%",
                  margin: "0 auto",
                  marginBottom: "20px",
                  ":hover": {
                    backgroundColor: "#e3b6a6",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <ListItemButton
                  //   component="a"
                  //   href="#creating"
                  onClick={() => {
                    alert("I'm a button.");
                  }}
                >
                  <ListItemText primary={Object.keys(item)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
};
export default ThemesSelection;
