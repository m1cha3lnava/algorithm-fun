import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Algorithm Challenge</h1>
        <Question />
      </div>
    );
  }
}

export default Home;
