import React, { Component } from "react";
import data from "../json/questions.json";
import Lader from "../lader";
import { withRouter } from "react-router-dom";
import FinalPage from "../../page/finalPage";
export class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      question: [],
      correctAnswer: [],
      renderAnswer: [],
      count: 0,
      answer: [],
      renderQuestion: "",
      gameOver: false,
    };
  }

  componentDidMount() {
    const options = data.map((data) => data.options);
    const question = data.map((data) => data.question);
    const correctAnswer = data.map((data) => data.answer);
    this.setState({
      options: options,
      question: question,
      correctAnswer: correctAnswer,
      renderAnswer: options[0],
      answer: correctAnswer[0],
      renderQuestion: question[0],
    });
  }

  next = () => {
    const { count, options, correctAnswer, question } = this.state;
    if (count + 1 < options.length) {
      this.setState({
        count: count + 1,
        renderAnswer: options[count + 1],
        answer: correctAnswer[count + 1],
        renderQuestion: question[count + 1],
      });
    } else {
      this.setState({ gameOver: true });
    }
  };

  checkAnswer = (e) => {
    const { answer } = this.state;
    const pressedAnswer = e.target.textContent;

    if (pressedAnswer === answer) {
      this.next();
    } else {
      this.setState({ gameOver: true });
      
    }
  };

  render() {
    const { renderAnswer, renderQuestion, count, gameOver } = this.state;
    const answerButtons = renderAnswer.map((answer, index) => (
      <button onClick={this.checkAnswer} key={index}>
        {answer}
      </button>
    ));
    if (gameOver) {
      
      return  <FinalPage score={count} />
      
    }
    
    return (
      <div>
        <div>{renderQuestion}</div>
        <div>{answerButtons}</div>
        <Lader step={count} />
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default withRouter(Answers);
