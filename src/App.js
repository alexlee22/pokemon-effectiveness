import React, { Component } from 'react';
import Header from './components/Header.js';
import Results from './components/Results.js';
import { StateProvider, initialState, reducer } from "./store/store.js";

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#000000',
      },
      secondary: {
          main: '#f44336',
      },
  },
});

class App extends Component {
  render() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Results />
          </div>
        </MuiThemeProvider>
      </StateProvider>
    );
  } 
}

export default App;

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/