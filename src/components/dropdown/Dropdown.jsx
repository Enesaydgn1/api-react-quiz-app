import React from 'react'
import './Dropdown.scss'

const Dropdown = ({data,setDifficultyChange}) => {
  return (
    <div className='dropdown'>
    <select onChange={e => setDifficultyChange(e.target.value)} name="" id="">
    <option disabled selected value="">-- Choose Difficulty --</option>
        {data.map((dt,i) => (
          <option key={i} value={dt}>{dt}</option>
        ))}
    </select>
    <div className='explanation'>
        <h5>Warning !</h5>
        <p>- Each question is worth 100 points</p>
        <p>- You have 30 seconds for each question. If your time runs out, the answer to the question is considered blank.</p>
        <h6>GOOD LUCK :)</h6>
    </div>
  </div>
  )
}

export default Dropdown
