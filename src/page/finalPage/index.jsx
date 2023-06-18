import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { withRouter } from "react-router-dom";
class FinalPage extends Component {
  startGame = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
   
  }
  render() {
    const { score } = this.props;

    return (
     
      
        <div>
          {score}
          <button onClick={this.startGame}>Back to start</button>
        </div>
     
    );
  }
}

export default withRouter(FinalPage);
