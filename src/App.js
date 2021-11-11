import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [meaning, setMeaning] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryApi();
  }, []);
  return (
    <div className="app">
      <Container maxWidth="md" className="container">
        <Header />
      </Container>
      {meaning}
    </div>
  );
}

export default App;
