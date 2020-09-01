import React, { Component } from "react";
import Question from "../../components/Question";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Algorithm Challenge</h1>
        <Question title= "Question 1"/>
      </div>
    );
  }
}

export default Home;
