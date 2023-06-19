import React, { Component } from "react";
import Answers from "../../components/AnswerOptions";
import style from "./style.module.scss";
export class Game extends Component {
  render() {
    return (
      <div className={style.gamePageWrapper}>
        <Answers />
      </div>
    );
  }
}

export default Game;
