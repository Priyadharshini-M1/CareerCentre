import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HRQuestionTopics.css'

const Aptitude = () => {
    const navigate = useNavigate();

    const hanldeBackbtn = () =>{
        navigate('/Homepage')
    }

    const dockerstart = () =>{
        navigate('/HRQuestions')
    }
  return (
    <div>
    <div className='aptitude-container'>
        <h1>Career Centre</h1>
        <button className='backbtn' onClick={hanldeBackbtn}>Back</button>
        </div>
      <div className='easylevel'>
        <h2>Docker</h2>
        <button className='startbtn' onClick={dockerstart}>Start</button>
      </div>
      <div className='easylevel'>
        <h2>Git</h2>
        <button className='startbtnintermediate'>Start</button>
      </div>
      <div className='easylevel'>
        <h2>Linux</h2>
        <button className='startbtnadvancelevel'>Start</button>
      </div>
    </div>
  )
}

export default Aptitude
