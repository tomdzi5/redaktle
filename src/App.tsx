import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Game from "./pages/game/Game";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
