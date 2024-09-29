import React from 'react';

const Result = ({ message, onRestart }) => {
  return (
    <div>
      <h2>결과 페이지</h2>
      <div className="alert">{message}</div>
      <button onClick={onRestart}>다시 시작</button>
    </div>
  );
};

export default Result;
