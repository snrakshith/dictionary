// import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

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
  return <div className="App">Learn</div>;
}

export default App;
