import {
  MenuItem,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";

import React from "react";
import catergory from "../../data/category";

import "./Header.css";

const Header = ({ data }) => {
  const darktheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="input">
        <ThemeProvider theme={darktheme}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please Select the Language"
          >
            {catergory.map((option) => (
              <MenuItem>{option.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
