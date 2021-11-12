import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Definations from "./components/Definations/Definations";
import { grey } from "@material-ui/core/colors";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);
  // console.log(category);
  // Theme Switch
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/fr/${word}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryApi();
  }, [category, word]);
  return (
    <div
      className="app"
      style={{
        color: LightMode ? "#282f34" : "#fff",
        height: "100vh",
        backgroundColor: LightMode ? "#fff" : "#282f34",
        transition: "all .5s linear",
      }}
    >
      <Container maxWidth="md" className="container">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "15px",
            paddingTop: "10px",
          }}
        >
          <span>{LightMode ? "Light" : "Dark"} Mode</span>
          <DarkMode
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightMode={LightMode}
        />
        <Definations />
      </Container>
    </div>
  );
}

export default App;
