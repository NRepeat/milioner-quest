import React, { useState, useEffect } from "react";
import data from "../json/questions.json";
import Lader from "../lader";
import { withRouter } from "react-router-dom";
import FinalPage from "../../page/finalPage";
import style from "./style.module.scss";
import classNames from "classnames";
const Answers = () => {
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [renderAnswer, setRenderAnswer] = useState([]);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [renderQuestion, setRenderQuestion] = useState("");
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const { options, question, answer } = data.reduce(
      (acc, item) => {
        acc.options.push(item.options);
        acc.question.push(item.question);
        acc.answer.push(item.answer);
        return acc;
      },
      { options: [], question: [], answer: [] }
    );
    setOptions(options);
    setQuestion(question);
    setCorrectAnswer(answer);
    setRenderAnswer(options[0]);
    setAnswer(answer[0]);
    setRenderQuestion(question[0]);
  }, []);
  const next = () => {
    if (count + 1 < options.length) {
      setCount(count + 1);
      setRenderAnswer(options[count + 1]);
      setAnswer(correctAnswer[count + 1]);
      setRenderQuestion(question[count + 1]);
    } else {
      setGameOver(true);
    }
  };
  const checkAnswer = (e) => {
    const pressedAnswer = e.target.textContent.substring(1).trim();
    console.log(answer)
    if (pressedAnswer === answer) {
      next();
    } else {
      setGameOver(true);
    }
  };

  const buttonClassnames = classNames(style.button, style.box1);
  const answerButtons = renderAnswer.map((answer, index) => {
    const abcd = ["A", "B", "C", "D"];
    return (
      <button className={buttonClassnames} onClick={checkAnswer} key={index}>
       <div className={style.variant}>{abcd[index]}</div> {answer}
      </button>
    );
  });

  if (gameOver) {
    return <FinalPage score={count} />;
  }
  return (
    <div className={style.wrapper}>
      <div className={style.answerWrapper}>
        {" "}
        <div className={style.qyestion}>{renderQuestion}</div>
        <div className={style.buttonWrapper}>{answerButtons}</div>
      </div>

      <Lader  step={count} />
    </div>
  );
};

export default withRouter(Answers);
