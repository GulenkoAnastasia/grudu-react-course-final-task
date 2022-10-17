import React from 'react'
import { Form } from '../../components/Form'
import { signupShema } from '../../validation/userValidation'

export const SignupPage: React.FC = () => {
  const initialValues = {
    Email: '',
    Password: '',
    Username: '',
    Fullname: ''
  }

  return (
    <div className='form'>
      <Form
        view="Sign up"
        initialValues={initialValues}
        validationSchema={signupShema}
        onSubmit={(values) => console.log(values)}/>
    </div>
  )
}
