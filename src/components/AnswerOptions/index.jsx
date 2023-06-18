import React, { Component } from 'react';
import data from '../json/questions.json';
import Lader from '../lader';
import { withRouter } from 'react-router-dom';

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
      renderQuestion: '',
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
    this.setState({
      count: count + 1,
      renderAnswer: options[count + 1],
      answer: correctAnswer[count + 1],
      renderQuestion: question[count + 1],
    });
  };

  finalPage = () => {
    this.props.history.push('/finalPage');
  };

  checkAnswer = (e) => {
    const { answer } = this.state;
    const pressedAnswer = e.target.textContent;

    if (pressedAnswer === answer) {
      this.next();
    } else {
      this.finalPage();
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      };
    }
  };

  render() {
    const { renderAnswer, renderQuestion, count } = this.state;
    const answerButtons = renderAnswer.map((answer, index) => (
      <button onClick={this.checkAnswer} key={index}>
        {answer}
      </button>
    ));

    return (
      <div>
        <div>{renderQuestion}</div>
        <div>{answerButtons}</div>
        <Lader count={count} />
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default withRouter(Answers);
