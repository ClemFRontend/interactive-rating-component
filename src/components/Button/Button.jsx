import React from 'react'
import './Button.css'

function Button({disabled, className, onClick, children}) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
  )
}

export default Button
