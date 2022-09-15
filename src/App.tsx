import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Game from "./pages/game/Game";
import { theme } from './app/theme';
import {ThemeProvider} from "@mui/material";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Game />
        </ThemeProvider>
    </div>
  );
}

export default App;
