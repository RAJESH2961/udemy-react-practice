import QUESTIONS from '../questions.js';
import { useState } from "react";
import quizCompleteImage from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';
/**
 * Quiz component to display a list of questions one by one.
 * Tracks user-selected answers and renders the next question upon selection.
 */
export default function Quiz() {
  // State to track all answers selected by the user
  const [userAnswers, setUserAnswers] = useState([]);

  // Derive the index of the current active question based on how many answers are selected
  const activeQuestionIndex = userAnswers.length;


  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  /**
   * Handles selection of an answer.
   * Adds the selected answer to the userAnswers array.
   * Triggers a re-render to show the next question.
   * 
   * @param {string} selectedAnswer - The answer selected by the user.
   */
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  if(quizIsComplete){
    return <div id='summary'>
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
    </div>
  }
const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
    <div id="questions">
      {/* Display the current question text */}
      <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

      {/* Render a button for each possible answer */}
      <ul id="answers">
        {shuffledAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>
            {/* passing tha answer to an handleselecterAnswer function*/}
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
