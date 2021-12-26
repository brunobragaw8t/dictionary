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
  const [darkMode, setDarkMode] = useState(1);

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
    <div className={`App ${!darkMode ? 'light-mode' : ''}`}>
      <Container maxWidth="md">
        <Header word={word} setWord={setWord} language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />

        <Meanings word={word} setWord={setWord} meanings={meanings} />
      </Container>
    </div>
  );
}

export default App;
