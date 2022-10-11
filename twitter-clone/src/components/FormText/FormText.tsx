import React from 'react';
import { Link } from 'react-router-dom';
import './FormText.scss'

export const FormText: React.FC<{title: string}> = ({  title }) => {
  return (
    <div className='form-text'>
    {title === 'Sign up' ? 
      <>
      <span>Already have an account? </span>
      <Link to='/'>Log in</Link> 
      </>
      :
      <>
      <span>Don't have an account? </span>
      <Link to='/signup'>Sign up</Link> 
      </>
    }
    </div>
  )
}