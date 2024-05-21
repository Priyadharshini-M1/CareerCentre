import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const aptitudeviewbutton = () =>{
    navigate('/Login')
  }

  const hanldeLogin = () =>{
    navigate('/Login')
  }

  const handlehrbutton = () =>{
    navigate('/Login')
  }

  const handleCodingBtn = () =>{
    navigate('/Login')
  }
  
  return (
    <div className='container'>
      <div className='home-container'>
      <h1>Career Centre</h1>
      <button className='login-btn' onClick={hanldeLogin}>Login</button>
      </div>
      <div className='aptitudeModule'>
        <h2>Aptitude</h2>
        <h4>It includes questions at Easy, Intermediate, and Advanced levels. Click here to view the questions.</h4>
        <button onClick={aptitudeviewbutton}>View</button>
      </div>
      <div className='aptitudeModule'>
        <h2>Coding</h2>
        <h4>It includes a variety of coding questions covering topics in Python, Java, C, C++, and JavaScript.</h4>
        <button className='viewcodingButton' onClick={handleCodingBtn}>View</button>
      </div>
      <div className='aptitudeModule'>
        <h2>HR Questions</h2>
        <h4>It includes various topic questions that are commonly asked by the HR.</h4>
        <button className='viewHrButton' onClick={handlehrbutton}>View</button>
      </div>
    </div>
  )
}

export default Home
