import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import style from "../../page/mainPage/style.module.scss"
class GameStartBtn extends Component {
  startGame = () => {
    this.props.history.push("/game");
  };

  render() {
   
    return  <button onClick={this.startGame} className={style.box1}>Start</button>
  }
}

export default withRouter(GameStartBtn);
