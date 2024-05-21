import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Aptitude from './Components/Aptitude';
import Login from './Components/Login';
import EasyLevelAptitude from './Components/EasyLevelAptitude';
import HRQuestions from './Components/HRQuestions';
import HRQuestionTopics from './Components/HRQuestionTopics';
import CodingTopics from './Components/CodingTopics';
import JavaCodingQuestions from './Components/JavaCodingQuestions';
import Signup from './Components/Signup';
import Homepage from './Components/Hompage';

axios.defaults.baseURL = " https://1710-13-51-171-79.ngrok-free.app";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning":"69420",
};

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Aptitude' element={<Aptitude/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/EasyLevelAptitude' element={<EasyLevelAptitude/>}/>
      <Route path='/HRQuestions' element={<HRQuestions/>}/>
      <Route path='/HRQuestionTopics' element={<HRQuestionTopics/>}/>
      <Route path='/CodingTopics' element={<CodingTopics/>}/>
      <Route path='/JavaCodingQuestions' element={<JavaCodingQuestions/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
