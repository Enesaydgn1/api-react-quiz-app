import React from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import { useState , useEffect } from 'react'
import QuestionCard from '../../components/questionCard/QuestionCard'
import './quiz.scss'
import Modal from '../../components/modal/Modal'

import { ThreeDots } from  'react-loader-spinner'

const Quiz = () => {
  const {difficulty, amount} = useParams()
  const [questionsData, setQuestionsData]  = useState([]);
  const[score,setScore] = useState(0)
  const[count,setCount] = useState(0)
  const [questionModal, setQuestionModal] = useState(false)
  const [load , setLoad] = useState(undefined)
    useEffect(() => {
      const getData =async() => {
            const data = await api.fetchQuizData(difficulty,amount)
            setQuestionsData(data)
            setLoad(true)
      } 
      getData();
    }, [])
  
    return ( 
    <div className='quiz'>
    {
     !load ? (<ThreeDots
    height = "100"
    width = "100"
    radius = "9"
    color = 'white'
    ariaLabel = 'three-dots-loading'     
    
  />):
      
      (questionModal ? <Modal score={score}/> : 
      <QuestionCard
          questionsData ={questionsData}
          score= {score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          questionModal = {questionModal}
          setQuestionModal = {setQuestionModal}
      />)
    
    }
   
     
      
    </div>
  )
}

export default Quiz
