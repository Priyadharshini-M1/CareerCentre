import React, { useState } from 'react';
import './HRQuestions.css';
import { useNavigate } from 'react-router-dom';

const HRQuestions = () => {
  const navigate = useNavigate();
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const questionsAndAnswers = [
    { question: 'What is Docker?', answer: 'Docker is an open platform for developing, shipping, and running applications.' },
    { question: 'Difference between virtualization and containerization?', answer: 'Virtualization uses VMs to emulate physical machines, while containerization packages applications with their dependencies in containers.' },
    { question: 'What is a Docker Container?', answer: 'A Docker container is a lightweight, standalone, executable package of software that includes everything needed to run an application.' },
    { question: 'What are Docker Images?', answer: 'Docker images are read-only templates used to create containers.' },
    { question: 'What is Docker Hub?', answer: 'Docker Hub is a cloud-based repository where you can find and share container images.' },
    { question: 'What is a Dockerfile?', answer: 'A Dockerfile is a text file that contains a set of instructions to build a Docker image.' },
    { question: 'What is the lifecycle of a Docker Container?', answer: 'The lifecycle includes creation, running, paused, stopped, and deleted states.' },
    { question: 'Important Docker commands?', answer: 'Some important commands are: docker build, docker run, docker pull, docker push, docker ps, docker stop.' },
    { question: 'How to create Docker container?', answer: 'You can create a Docker container using the docker run command followed by the image name.' }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questionsAndAnswers.length).fill(''));
  const [efficiency, setEfficiency] = useState(Array(questionsAndAnswers.length).fill(null));

  const handleBackBtn = () => {
    navigate('/HRQuestionTopics');
  }

  const toggleAnswer = (index) => {
    if (visibleAnswer === index) {
      setVisibleAnswer(null);
    } else {
      setVisibleAnswer(index);
    }
  }

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = e.target.value;
    setUserAnswers(newAnswers);
  }

  const calculateEfficiency = (userAnswer, correctAnswer) => {
    const words1 = userAnswer.trim().toLowerCase().split(' ');
    const words2 = correctAnswer.trim().toLowerCase().split(' ');
    const intersection = words1.filter(word => words2.includes(word));
    const efficiency = (intersection.length / words2.length) * 100;
    return efficiency.toFixed(2);
  }

  const handleCheckAnswer = (index) => {
    const efficiencyPercentage = calculateEfficiency(userAnswers[index], questionsAndAnswers[index].answer);
    const newEfficiency = [...efficiency];
    newEfficiency[index] = efficiencyPercentage;
    setEfficiency(newEfficiency);
  }

  return (
    <div>
      <div className='aptitude-container'>
        <h1>Career Centre</h1>
        <button className='backbtn' onClick={handleBackBtn}>Back</button>
      </div>
      <div className='hrquestions-docker'>
        <h3 className='docker-text'>Docker</h3>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index} className={`question-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h5>{qa.question}</h5>
            <button onClick={() => toggleAnswer(index)}>
              {visibleAnswer === index ? 'Hide' : 'View'}
            </button>
            {visibleAnswer === index && <p className='answer'>{qa.answer}</p>}
            <textarea
              value={userAnswers[index]}
              onChange={(e) => handleAnswerChange(e, index)}
              placeholder='Write your answer here...'
            />
            <div className='btn-container'>
              <button onClick={() => handleCheckAnswer(index)}>Check</button>
              {efficiency[index] !== null && (
                <p className='efficiency'>Efficiency: {efficiency[index]}%</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HRQuestions;
