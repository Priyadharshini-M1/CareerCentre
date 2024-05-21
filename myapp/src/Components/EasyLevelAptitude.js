import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EasyLevelAptitude.css';

const questions = [
  {
    question: "What is the sum of the angles of a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: "180°",
    explanation: "The sum of the angles in any triangle is always 180°."
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2",
    explanation: "The smallest prime number is 2."
  },
  {
    question: "What is 15% of 200?",
    options: ["20", "25", "30", "35"],
    correctAnswer: "30",
    explanation: "15% of 200 is 30."
  },
  {
    question: "Which number is a perfect square?",
    options: ["16", "20", "25", "30"],
    correctAnswer: "25",
    explanation: "25 is a perfect square (5x5)."
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    explanation: "Mars is known as the Red Planet."
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
    explanation: "The capital of France is Paris."
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
    explanation: "The largest ocean on Earth is the Pacific Ocean."
  },
  {
    question: "What is the value of π (pi)?",
    options: ["2.14", "3.14", "4.14", "5.14"],
    correctAnswer: "3.14",
    explanation: "The value of π (pi) is approximately 3.14."
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Osmium"],
    correctAnswer: "Oxygen",
    explanation: "The chemical symbol 'O' stands for Oxygen."
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
    explanation: "The square root of 64 is 8."
  }
];

const shuffleArray = (array) => {
  const shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

const AptitudeQuestions = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
  }, []); // Run only once when the component mounts

  const handleAnswerClick = (questionIdx, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIdx]: answer }));
    if (answer === shuffledQuestions[questionIdx].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleShowExplanation = (questionIdx) => {
    setShowExplanation((prev) => ({ ...prev, [questionIdx]: true }));
  };

  const handlebackbtn = () => {
    navigate('/Aptitude');
  };

  return (
    <div className="aptitude-questions">
      <div className="header">
        <h1>Career Centre</h1>
        <button onClick={handlebackbtn}>Back</button>
      </div>
      {shuffledQuestions.map((q, idx) => (
        <div key={idx} className={`question-block ${showExplanation[idx] ? 'correct' : ''}`}>
          <h3>{q.question}</h3>
          <div className="options">
            {q.options.map((option, oidx) => (
              <button
                key={oidx}
                className={`option-btn ${selectedAnswers[idx] && option === selectedAnswers[idx] ? (option === q.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswerClick(idx, option)}
                disabled={!!selectedAnswers[idx]}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={() => handleShowExplanation(idx)}>Answer</button>
          {showExplanation[idx] && <p className="explanation">{q.explanation}</p>}
        </div>
      ))}
      {Object.keys(selectedAnswers).length === shuffledQuestions.length && (
        <div className="score">
          <h2>Your Score: {score} out of {shuffledQuestions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default AptitudeQuestions;
