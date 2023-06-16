import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class GameStartBtn extends Component {
  startGame = () => {
    this.props.history.push("/game");
  };

  render() {
    return <button onClick={this.startGame}>Start</button>;
  }
}

export default withRouter(GameStartBtn);
