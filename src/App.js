import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './page/mainPage';
import Game from './page/gamePage';
import FinalPage from './page/finalPage';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/finalPage">
          < FinalPage/>
        </Route>
      </BrowserRouter>
    );
  }
}
