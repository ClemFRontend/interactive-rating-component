import React, { useState } from 'react'
import './RatingForm.css'

// Assets
import ICON_STAR from '../../assets/icon-star.svg'
import ILLUSTRATION_THANK_YOU from '../../assets/illustration-thank-you.svg'
import Button from '../Button/Button'

function Rate({handleClick, index}) {
  const id = `${index}`
  return <>
    <input id={id} name={"rate"} onClick={handleClick} type="radio" value={index} className='button' />
    <label htmlFor={id}>{index}</label>
  </>
}

function Form({handleSubmit, handleClick, maxRate = 5, disabled}) {
  const radios = []

  for (let n=1; n<maxRate+1; n++) {
    radios.push(
      <Rate 
        handleClick={handleClick}
        index={n}
        key={n}
      />
    )
  }

  return (
    <div className='modal rate-form-container'>
      <div className='star-container'>
        <img alt='star' src={ICON_STAR} className='star' />
      </div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form onSubmit={handleSubmit}>
        <div className="rate-container">
          {radios}
        </div>
        <Button className="btn btn-primary" disabled={disabled}>Submit</Button>
      </form>
    </div>
  )
}

function ResultForm({rate, maxRate = 5}) {
  console.log("result")
  return <div className='modal result-container'>
      <img src={ILLUSTRATION_THANK_YOU} alt="thank you" />
      <div className='result'><span>You selected {rate} out of {maxRate}</span></div>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </div>
}

function RatingForm() {
  const [rate, setRate] = useState(5)
  const [isSubmit, setIsSubmit] = useState(false)
  const maxRate = 5

  function handleClick(e) {
    setRate(e.target.value)
  }

  function handleSubmit(e) {
    // Trigger animation rotate3d
    document.querySelector(".modal").classList.add("rotate3d-right")
    // Wait animation end before mount <Form /> component
    setTimeout(() => {
      setIsSubmit(true)
    }, 300)
    e.preventDefault()
  }

  return <>
    {isSubmit ?
      <ResultForm rate={rate} maxRate={maxRate} /> :
      <Form 
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        // disabled={rate > 0 ? false : true}
        maxRate={maxRate} />}
  </>
}

export default RatingForm
