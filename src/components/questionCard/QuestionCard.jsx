import React, { useEffect, useState } from 'react'
import './QuestionCard.scss'

const QuestionCard = ({questionsData,questionModal, setQuestionModal ,score ,setScore, count , setCount}) => {
  
  const [timer , setTimer] = useState(30)
  
  const approvedChoice = (e) =>
  {
      console.log(e.currentTarget.value)
      const checkAnswer = e.currentTarget.value == questionsData[count]?.correct_answer

      if(checkAnswer)setScore(score + 100)
      setCount(count +1)
      if(count == 9) setQuestionModal(true)
      setTimer(30)
    }

    useEffect(() => {
      const interval = setInterval(() =>{
        if(timer > 0){
          setTimer(timer-1)
        }
        if(timer == 0 && count < 10){
            setCount(count + 1)
            setTimer(30)
        }else if(count >= 10){
            setQuestionModal(true)
        }
      },1000)

      return() =>{
        clearInterval(interval)
      }
    },[timer])
  
  return (
    <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>

        <div className='questionCard-title'>
          {count +1}/10 -  {questionsData[count]?.question}<br/>
          {
            questionsData[count]?.answers?.map((answer,i) =>(
                  <button  className='answerButton' onClick={approvedChoice} key={i} value={answer}>{answer}</button>
            ))
          }
        </div>
    </div>
  )
}

export default QuestionCard