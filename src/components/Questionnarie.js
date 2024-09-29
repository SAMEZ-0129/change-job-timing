import React, { useState } from 'react';
import Result from './Result';

const questions = [
  {
    question: "현재 하는 일에 대한 느낌은 어떤가요?",
    options: [
      { text: "일이 재미있으며, 성장하는 재미가 있다.", score: 1 },
      { text: "큰 불만은 없으며, 딱히 큰 기대는 없다.", score: 0 },
      { text: "일이 재미없으며, 너무 지루하다.", score: -1 },
    ],
  },
  {
    question: "출근하기 전에 무슨 생각이 드시나요?",
    options: [
      { text: "오늘 업무가 기대된다.", score: 1 },
      { text: "그냥 별 생각은 없다.", score: 0 },
      { text: "집에 가고 싶은 생각 뿐이다...", score: -1 },
    ],
  },
  {
    question: "동료들은 어떤가요?",
    options: [
      { text: "매우 좋고 나를 지지해준다.", score: 1 },
      { text: "잘 모르겠다.", score: 0 },
      { text: "나한테 관심 없거나 부정적이다.", score: -1 },
    ],
  },
  {
    question: "상사에게 본인의 의견이 잘 전달되는 편인가요?",
    options: [
      { text: "내 의견을 적극 반영해준다.", score: 1 },
      { text: "그런거 모른다.", score: 0 },
      { text: "내 의견은 무시되는 편이다.", score: -1 },
    ],
  },
  {
    question: "본인의 입지를 어떻게 보시나요?",
    options: [
      { text: "역량을 인정받고, 중요한 업무도 맡아서 진행한다.", score: 1 },
      { text: "규모가 크진 않지만 적당히 단독 수행도 한다.", score: 0 },
      { text: "중요한 일은 커녕, 의미없는 일만 하는 느낌이다.", score: -1 },
    ],
  },
  {
    question: "선배/선임은 어떤 모습인가요?",
    options: [
      { text: "배울 점이 많은 일잘러다.", score: 1 },
      { text: "그냥 평범한 월급쟁이같다.", score: 0 },
      { text: "저렇게 되고 싶지 않다.", score: -1 },
    ],
  },
  {
    question: "현재 받는 보상은 적절하다고 생각하나요?",
    options: [
      { text: "매우 만족스럽게 보상받는다.", score: 1 },
      { text: "만족스럽진 않지만, 견딜만하다.", score: 0 },
      { text: "보상? 그런게 있나?", score: -1 },
    ],
  },
  {
    question: "본인의 커리어는 어느정도라고 생각하시나요?",
    options: [
      { text: "뚜렷한 성과도 있고, 존재감이 확실하다.", score: 1 },
      { text: "큰 성과는 없지만, 어느정도 발전하고 있다.", score: 0 },
      { text: "특별하게 내 새울 만한 장점이 없다.", score: -1 },
    ],
  },
  {
    question: "현재 회사의 경영상태는 어떤가요?",
    options: [
      { text: "회사가 돈도 많고 투자도 많이한다.", score: 1 },
      { text: "월급이 밀리진 않는다.", score: 0 },
      { text: "조만간 망할 것 같다.", score: -1 },
    ],
  },
  {
    question: "지금 회사에 본인의 미래가 그려지나요?",
    options: [
      { text: "회사랑 같이 성장할 것 같다.", score: 1 },
      { text: "회사는 그대로지만, 의미있는 경험을 가져갈 것 같다.", score: 0 },
      { text: "물경력/고인물이 되지 않을까 걱정이다.", score: -1 },
    ],
  }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [resultMessage, setResultMessage] = useState('');

  const handleOptionClick = (selectedOption) => {
    const selected = currentQuestion.options.find(option => option.text === selectedOption);
    
    setAnswers([...answers, selectedOption]);
    setTotalScore(totalScore + selected.score);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex >= questions.length) {
      const finalScore = totalScore + selected.score; // 최종 점수 계산
      showResult(finalScore);
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const showResult = (finalScore) => {
    let message;
    if (finalScore <= -3) {
      message = "이직을 추천합니다!";
    } else if (finalScore <= 3) {
      message = "이직을 고려해 볼 만합니다.";
    } else {
      message = "현재 상태를 유지하는 것이 좋습니다.";
    }
    console.log(message); // 디버깅용 로그 추가
    console.log(finalScore) // 최종 점수 출력
    setResultMessage(message); // 결과 메시지 상태에 저장
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setTotalScore(0);
    setAnswers([]);
    setResultMessage(''); // 결과 메시지 초기화
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      {resultMessage ? (
        <Result message={resultMessage} onRestart={resetQuiz} /> // Result 컴포넌트 사용
      ) : (
        <div>
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button 
                key={index} 
                className="button-28" 
                onClick={() => handleOptionClick(option.text)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;