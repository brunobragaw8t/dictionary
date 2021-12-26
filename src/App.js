import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState('en');

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, language]);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Header word={word} setWord={setWord} language={language} setLanguage={setLanguage} />
      </Container>
    </div>
  );
}

export default App;
