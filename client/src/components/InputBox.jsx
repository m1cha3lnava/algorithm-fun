import React, { Component } from "react";

class InputBox extends Component {
  render() {
    return (
      <>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Type something</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
      </>
    );
  }
}

export default InputBox;
