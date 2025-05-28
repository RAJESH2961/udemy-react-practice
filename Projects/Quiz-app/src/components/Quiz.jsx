import QUESTIONS from '../questions.js';
import { useCallback, useState, useMemo } from "react";
import quizCompleteImage from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswers) => [
        ...prevUserAnswers,
        selectedAnswer,
      ]);

      setTimeout(() => {
        if (currentQuestion && selectedAnswer === currentQuestion.answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [currentQuestion]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const shuffledAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    const shuffled = [...currentQuestion.answers];
    return shuffled.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  // ✅ Safe render after all hooks are declared
  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <div id="questions">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
          key={activeQuestionIndex}
        />
        <h2>{currentQuestion?.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            let cssClass = '';
            const currentAnswer = userAnswers[activeQuestionIndex];

            if (answerState === 'answered' && currentAnswer === answer) {
              cssClass = 'selected';
            }

            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              currentAnswer === answer
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                  disabled={answerState !== ''}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
