import React from "react";

const ResultBox = () => {
  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Typed Result</span>
        </div>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
    </>
  );
};

export default ResultBox;
