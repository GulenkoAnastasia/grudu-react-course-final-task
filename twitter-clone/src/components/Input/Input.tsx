import React from 'react';

interface InputInfo {
  text: string,
  onChange?: () => void,
  onError?: () => void,
  type: string,
  className?: string
}
export const Input: React.FC<InputInfo> = ({onChange, onError, text, type, className}) => {
  return (
    <input className={className} type={type} placeholder={text}/>
  )
}