import { createTheme, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import React from 'react'
import './Header.css'

const Header = ({word, setWord, language, setLanguage}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#4fc3f7',
      },
      mode: 'dark',
    },
  });

  return (
    <div className="header">
      <span className="title">
        {word ? word : 'Dictionary'}
      </span>

      <ThemeProvider theme={darkTheme}>
        <Grid container spacing={2} className="inputs">
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="standard"
              id="word"
              label="Word"
              placeholder="Search a word"
              value={word}
              onChange={e => setWord(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="language-label">Language</InputLabel>

              <Select
                labelId="language-label"
                id="language"
                label="Language"
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                <MenuItem value='en'>English</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Header
