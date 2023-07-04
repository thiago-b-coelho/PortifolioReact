import React from 'react'
import "./ButtonA.scss"

const ButtonA = ({text,link}) => {
  return (
    <div>
        <a href={link} target='_blank'>
        <button className='ButtonA'>{text}</button>
        </a>
    </div>
  )
}

export default ButtonA