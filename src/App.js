import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Meanings from './components/Meanings/Meanings';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState('en');

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);

      setMeanings(data.data);
    } catch (error) {
      setMeanings([]);
    }
  }

  useEffect(() => {
    dictionaryApi();
  }, [word, language]);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Header word={word} setWord={setWord} language={language} setLanguage={setLanguage} />

        <Meanings word={word} meanings={meanings} />
      </Container>
    </div>
  );
}

export default App;
