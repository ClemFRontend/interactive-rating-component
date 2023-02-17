import React, { useState } from 'react'
import './RatingForm.css'

// Assets
import IconStar from '../../assets/icon-star.svg'
import IllustrationThankYoi from '../../assets/illustration-thank-you.svg'

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

  return <div className='container'>
    <img alt='star' src={IconStar} className='star' />
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <form onSubmit={handleSubmit}>
      <div className="rate-container">
        {radios}
      </div>
      <button disabled={disabled}>Submit</button>
    </form>
  </div>
}

function ResultForm({rate, maxRate = 5}) {
  return <div className='container result-container'>
      <img src={IllustrationThankYoi} alt="thank you" />
      <h2>You selected {rate} out of {maxRate}</h2>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
  </div>
}

function RatingForm() {
  const [rate, setRate] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)
  const maxRate = 5

  function handleClick(e) {
    setRate(e.target.value)
  }

  function handleSubmit(e) {
    // Trigger animation rotate3d
    document.querySelector(".container").classList.add("rotate3d-right")
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
        disabled={rate > 0 ? false : true}
        maxRate={maxRate} />}
  </>
}

export default RatingForm
