import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);
  // const [loading, setLoading] = useState(false);
  // if (loading) {
  //   return <p>Data is loading...</p>;
  // }
  // console.log(category);
  // Theme Switch
  const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
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
        // ${label}
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);
  return (
    <div
      className="app"
      style={{
        color: LightMode ? "#fff" : "#282f34",
        height: "100vh",
        backgroundColor: LightMode ? "#282f34" : "#fff",
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
        {meanings && (
          <Definitions word={word} meanings={meanings} LightMode={LightMode} />
        )}
      </Container>
    </div>
  );
}

export default App;
