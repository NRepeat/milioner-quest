import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import MainPage from './page/mainPage';
import Game from './page/gamePage';



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
      </BrowserRouter>
    );
  }
}
