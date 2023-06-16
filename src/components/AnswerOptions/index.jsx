import React, { Component } from "react";
import data from "../json/questions.json";

export class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      renderAnswer: [],
      count: 0,
    };
  }
  componentDidMount() {
    this.setState({
      answers: data,
    });
  }
  componentDidUpdate() {}
  next = () => {
    const { answers, count } = this.state;
    const a = answers.map((data) => data.options);

    this.setState({
      count: count + 1,
      renderAnswer: [a[count][0],a[count][1],a[count][2],a[count][3]],
    });
  };
  render() {
    const { renderAnswer } = this.state;
    const t = renderAnswer.map((answer)=>{
       return <p key={answer}>{answer}</p>
    });
    return (
      <div>
        {t}
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}

export default Answers;
