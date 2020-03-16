import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseLine from '@material-ui/core/CssBaseline'
import { 
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
 }
from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import { red, orange } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import TopImage from './components/TopImage'
import Grid from '@material-ui/core/Grid';
import Query from './components/Query'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import beerImg from './images/beer.png'
import BottomImage from './components/BottomImage'

let theme = createMuiTheme({
  palette: {
    primary: red
  }
})
theme = responsiveFontSizes(theme)

function App() {
  const [result,setResult] = useState("")
  const [beer,setBeer] = useState(false)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Container maxWidth="md">
          <NavBar />
          <Grid container>
            <Grid item md={6}>
              <div>
              <TopImage />
              </div>
              <div>
              <a href="https://knowyourmeme.com/memes/people-with-coronavirus-love-to-travel" target="_blank" rel="nofollow noopener">Know Your Meme</a>
              </div>
              
            </Grid>
            <Grid item md={6}>
              <Query setBeer={setBeer} setResult={setResult} />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item md={6}>
              {beer && <BottomImage />}
            </Grid>
            
              <Grid item md={6}>
                <Paper>
                  <Typography variant="h3" component="h3">
                    {result}
                  </Typography>
                </Paper>
              </Grid>
            
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
