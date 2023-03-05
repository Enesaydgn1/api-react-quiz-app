import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import './index.scss'
import {useNavigate} from 'react-router-dom'

const Intorduce = ()  => {
  const difficulty = ["easy" , "medium" ,"hard"]
  const [difficultyChange,setDifficultyChange] = useState('')
  const navigate = useNavigate()
  const TOTAL_QUESTIONS = 10  


  const startQuiz = () =>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
    }
  }

  return (
    <div className='intorduce'>
        <div className='intorduce-container'> 
            <img src='img/quiz.png'/>
            <Dropdown data= {difficulty} setDifficultyChange={setDifficultyChange} />
            <button onClick={startQuiz}>Quiz Start</button>
        </div>
    </div>
  ) 
}

export default Intorduce
