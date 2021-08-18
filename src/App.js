import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/definitions/Definitions';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);

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

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  console.log(meanings);

  useEffect(() => {
    dictionaryAPICall();
  }, [word, category]);
  // if [] is empty, then the code is executed when the component is first rendered.

  return <div 
    className="App" style={{ 
      height:'100vh'
      , backgroundColor: lightMode ? '#fff' : '#282c34'
      , color: lightMode? 'black' : 'white',
      transition: "all 0.5s linear"
    }}>
    {/* {
      meanings ? <p>hmm</p> : <p>Empty</p>
    } */}
    <Container 
      maxWidth='md' 
      style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly"}}
    >
      <div style={{position: "absolute", top:0, right: 15, paddingTop: 10}}>
        <span>{lightMode ? "Dark " : "Light "} Mode</span>
        <DarkMode checked={lightMode} onChange={() => setLightMode(!lightMode)}/>
      </div>

      <Header 
        category={category} 
        setCategory={setCategory} 
        word={word}
        setWord={setWord}
        lightMode={lightMode}
        />
      {
        meanings && <Definitions word={word} meanings={meanings} category={category} lightMode={lightMode} />
      }
    </Container>
  </div>
}

export default App;
