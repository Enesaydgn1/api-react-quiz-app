import React from 'react'
import "./modal.scss"
const Modal = ({score}) => {
  return (
    <div className='modal'>
       <div className='modal-title'>Score : {score}</div> 
        <button className='modal-btn' onClick={() => window.location = "/"}>Try Again</button>
    </div>
  )
}

export default Modal