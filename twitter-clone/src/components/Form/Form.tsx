import React from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import './Form.scss'
import { FormText } from '../FormText/FormText'

export const Form: React.FC<{ title: string }> = ({ title }) => {
  const inputFields: Record<string, string[]> = {
    'Log in': ['Username', 'Password'],
    'Sign up': ['Email', 'Password', 'Username', 'Full name']
  }
  return (
    <div className='form'>
      <form className='form__content'>
        <h2>{title}</h2>
        {inputFields[title].map((inputName: string) => {
          return <Input
          key={inputName}
          type={inputName === 'Password' || 'Email' ? inputName : 'text'}
          text={inputName}>
          </Input>
        })}
          <Button text={title}></Button>
      </form>
      <FormText title={title}></FormText>
    </div>
  )
}
