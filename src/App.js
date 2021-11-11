import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  console.log(category);
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
    <div className="app">
      <Container maxWidth="md" className="container">
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
