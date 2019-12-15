import React, { Component } from 'react';
import { StateProvider, initialState, reducer } from "./store/store.js";
import Header from './components/Header.js';
import Content from './components/Content.js';

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#ffffff',
      },
      secondary: {
          main: '#000000',
      },
  },
});

export default function App() {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Content />
          </div>
        </MuiThemeProvider>
      </StateProvider>
    );
  
}



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