import React from "react";
import InputBox from "./InputBox";
import ResultBox from "./ResultBox";

const Question = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-12">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="row">
            <div className="col-6">
              <InputBox />
            </div>
            <div className="col-6">
              <ResultBox />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Question;
