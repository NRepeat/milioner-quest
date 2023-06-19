import React, { Component } from "react";
import GameStartBtn from "../../components/GameStartButton";
import style from "./style.module.scss";
import svgimg from "./Group 265.svg";
import classNames from "classnames";

const CN = classNames(style.headline, style.box2);

export default class MainPage extends Component {
  render() {
    return (
      <div className={style.bodyWrapper}>
        <div className={style.diagonal }></div>

        <div className={style.startWrapper}>
          <img className={style.box3} src={svgimg} alt="Like"></img>
          <article className={CN}> Who wants to be a millionaire?</article>

          <GameStartBtn />
        </div>
      </div>
    );
  }
}
