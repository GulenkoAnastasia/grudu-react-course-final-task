import React from 'react';
import './Input.scss';

interface InputInfo {
  text: string,
  onChange?: () => void,
  onError?: () => void,
  type: string,
  className?: string
}
export const Input: React.FC<InputInfo> = ({onChange, onError, text, type, className}) => {
  return (
    <input className='form-input' type={type} placeholder={text}/>
  )
}