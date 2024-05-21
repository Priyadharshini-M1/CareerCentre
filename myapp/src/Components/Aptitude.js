import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Aptitude.css'
import EasyLevelAptitude from './EasyLevelAptitude';

const Aptitude = () => {
    const navigate = useNavigate();

    const hanldeBackbtn = () =>{
        navigate('/Homepage')
    }

    const EasyLevelAptitude = () =>{
        navigate('/EasyLevelAptitude')
    }
  return (
    <div>
    <div className='aptitude-container'>
        <h1>Career Centre</h1>
        <button className='backbutton' onClick={hanldeBackbtn}>Back</button>
        </div>
      <div className='easylevel'>
        <h2>Easy Level</h2>
        <button className='startbutton' onClick={EasyLevelAptitude}>Start</button>
      </div>
      <div className='easylevel'>
        <h2>Intermediate Level</h2>
        <button className='startbtninter'>Start</button>
      </div>
      <div className='easylevel'>
        <h2>Advance Level</h2>
        <button className='startbtnadvance'>Start</button>
      </div>
    </div>
  )
}

export default Aptitude
