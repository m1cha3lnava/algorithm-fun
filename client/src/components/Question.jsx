import React from 'react';
import InputBox from './InputBox';

const Question = (props) => {
    return (
        <>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <InputBox />
        </>
    );
};

export default Question;
