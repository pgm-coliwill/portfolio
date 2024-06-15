import React from 'react'
import design from './buttons.module.css'

export function HeroButtons({buttonText}) {
  return (
    <button className={design.heroButton}>
      {buttonText}
    </button>
  )
}
