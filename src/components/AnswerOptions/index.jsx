import React, { useEffect, useReducer } from "react";
import data from "../json/questions.json";
import Lader from "../lader";
import { withRouter } from "react-router-dom";
import FinalPage from "../../page/finalPage";
import style from "./style.module.scss";
import classNames from "classnames";
import reducer from "./reducer";
import { ActionType } from "./actionTypeEnum";

const initialState = {
  options: [],
  question: [],
  correctAnswer: [],
  renderAnswer: [],
  count: 0,
  answer: [],
  renderQuestion: "",
  gameOver: false,
};

const Answers = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
console.log(state)
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
    dispatch({ type: ActionType.SET_OPTIONS, payload: options });
    dispatch({ type: ActionType.SET_QUESTION, payload: question });
    dispatch({ type: ActionType.SET_CORRECT_ANSWER, payload: answer });
    dispatch({ type: ActionType.SET_RENDER_ANSWER, payload: options[0] });
    dispatch({ type: ActionType.SET_ANSWER, payload: answer[0] });
    dispatch({ type: ActionType.SET_RENDER_QUESTION, payload: question[0] });
  }, []);

  const next = () => {
    if (state.count + 1 < state.options.length) {
      dispatch({ type: ActionType.SET_COUNT, payload: state.count + 1 });
      dispatch({
        type: ActionType.SET_RENDER_ANSWER,
        payload: state.options[state.count + 1],
      });
      dispatch({
        type: ActionType.SET_ANSWER,
        payload: state.correctAnswer[state.count + 1],
      });
      dispatch({
        type: ActionType.SET_RENDER_QUESTION,
        payload: state.question[state.count + 1],
      });
    } else {
      dispatch({ type: ActionType.SET_GAME_OVER, payload: true });
    }
  };

  const checkAnswer = (e) => {
    const pressedAnswer = e.target.textContent.substring(1).trim();
    if (pressedAnswer === state.answer) {
      next();
    } else {
      dispatch({ type: ActionType.SET_GAME_OVER, payload: true });
    }
  };

  const buttonClassnames = classNames(style.button, style.box1);
  const answerButtons = state.renderAnswer.map((answer, index) => {
    const abcd = ["A", "B", "C", "D"];
    return (
      <button className={buttonClassnames} onClick={checkAnswer} key={index}>
        <div className={style.variant}>{abcd[index]}</div> {answer}
      </button>
    );
  });

  if (state.gameOver) {
    return <FinalPage score={state.count} />;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.answerWrapper}>
        {" "}
        <div className={style.qyestion}>{state.renderQuestion}</div>
        <div className={style.buttonWrapper}>{answerButtons}</div>
      </div>

      <Lader step={state.count} />
    </div>
  );
};

export default withRouter(Answers);
