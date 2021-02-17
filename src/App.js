import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import GameContextProvider from './contexts/GameContext';
import StartScreen from './components/StartScreen';
import PlayerForm from './components/PlayerForm';
import Game from './components/Game';
import StartOverButton from './components/StartOverButton';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GameContextProvider>
          <Route exact path="/" component={StartScreen}/>
          <StartOverButton />
          <Route exact path="/player-names" component={PlayerForm}/>
          <Route exact path="/play" component={Game}/>
        </GameContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
