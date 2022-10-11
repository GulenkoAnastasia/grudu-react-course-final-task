import React from "react";
import './Button.scss';

export const Button: React.FC<{text: string}> = ({ text }) => {
  return (
    <button className='form-button'>{ text }</button>
  )
}