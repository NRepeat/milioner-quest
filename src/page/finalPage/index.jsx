import React from "react";
import { useHistory } from "react-router-dom";
import svgimg from "./Group 265.svg"
import style from "./style.module.scss"
const winningsData = [
  "$100",
  "$500",
  "$1,000",
  "$2,000",
  "$5,000",
  "$10,000",
  "$20,000",
  "$50,000",
  "$75,000",
  "$100,000",
  "$500,000",
  "$1,000,000",
];

const FinalPage = ({ score }) => {
  const history = useHistory();

  const startGame = () => {
    history.push("/");
  };

  return (
    <div className={style.finalPageWrapper}>
      <div className={style.diagonal}></div>
      {" "}
      <img className={style.boxImg}  src={svgimg} alt="Like"></img>
      <h1 className={style.box3} >Total score:</h1>
      {score > 0 && score < winningsData.length ? (
        <p className={style.box1} >{winningsData[score - 1]} earned </p>
      ) : (
        <p className={style.box1} >You lose</p>
      )}
      <button className={style.button} onClick={startGame}>Try again</button>
    </div>
  );
};

export default FinalPage;
