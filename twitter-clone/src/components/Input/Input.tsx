import React from 'react'
import './Input.scss'

interface InputInfo {
  text: string
  onChange: (e: React.ChangeEvent<any>) => void
  handleBlur: (e: React.FocusEvent<any, Element>) => void
  type: string
  value: string
  id: string
  error?: string
}
export const Input: React.FC<InputInfo> = ({ onChange, text, type, value, id, error, handleBlur }) => {
  return (
    <div>
      <span className='error-text'>{error}</span>
      <input
        className={error ? 'form-input error-input' : 'form-input'}
        value={value}
        type={type}
        placeholder={text}
        onChange={onChange}
        onBlur={handleBlur}
        id={id}/>
    </div>
  )
}
