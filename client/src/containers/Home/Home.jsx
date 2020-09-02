import React, { Component } from "react";
import Question from "../../components/Question";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3">Algorithm Challenge</h1>
        <div className="card-deck-12">
          <Question title="Question 1" text="Sample Question text" />
          <Question title="Question 2" text="Sample Question text" />
          <Question title="Question 3" text="Sample Question text" />
        </div>
      </div>
    );
  }
}

export default Home;
