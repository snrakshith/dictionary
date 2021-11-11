import {
  MenuItem,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";

import React from "react";
import catergories from "../../data/category";

import "./Header.css";

const Header = ({ catergory, setCategory, word, setWord }) => {
  const onhandleChange = (language) => {
    setCategory(language);
    setWord("");
  };
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
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darktheme}>
          <TextField
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={catergory}
            onChange={(e) => onhandleChange(e.target.value)}
          >
            {catergories.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
