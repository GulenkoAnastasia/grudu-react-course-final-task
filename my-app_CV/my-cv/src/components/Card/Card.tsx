import React from 'react'

export const Card: React.FC<{ text: string }> = ({ text }) => {
  return (
        <button onClick={() => { console.log(text) }}>{ text }</button>
  )
}
