import React from "react";
import { useHistory } from "react-router-dom";

const winningsData = [
  '$100', '$500', '$1000', '$2000', '$5000', '$10000', '$20000', '$50000', 
  '$75000', '$100000', '$500000', '$1000000'
];

const FinalPage = ({ score }) => {
  const history = useHistory();

  const startGame = () => {
    history.push("/");
  };

  return (
    <>
      {score > 0 && score < winningsData.length ? (
        <p>You win {winningsData[score-1]}</p>
      ) : <p>You loser</p>}
      <button onClick={startGame}>Back to start</button>
    </>
  );
};

export default FinalPage;
