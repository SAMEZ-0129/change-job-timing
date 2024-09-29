import React from 'react';
import Questionnaire from './components/Questionnarie';
import './index.css';
// import './components/style.scss';

const App = () => {
  return (
    <div className="App">
      {/* 배경 애니메이션을 위한 wave 추가 */}
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <h1>이직 타이밍 진단</h1>
      <Questionnaire />
    </div>
  );
};

export default App;