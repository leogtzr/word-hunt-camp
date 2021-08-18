import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/definitions/Definitions';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryAPICall = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryAPICall();
  }, [word, category]);
  // if [] is empty, then the code is executed when the component is first rendered.

  return <div className="App" style={{ height:'100vh', backgroundColor: '#282c34', color: 'white' }}>
    {/* {
      meanings ? <p>hmm</p> : <p>Empty</p>
    } */}
    <Container 
      maxWidth='md' 
      style={{ display: "flex", flexDirection: "column", height: "100vh"}}
    >
      <Header 
        category={category} 
        setCategory={setCategory} 
        word={word}
        setWord={setWord}
        />
      {
        meanings && <Definitions word={word} meanings={meanings} category={category} />
      }
    </Container>
  </div>
}

export default App;
