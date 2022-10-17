import React from 'react'
import { Form } from '../../components/Form'
import { loginSchema } from '../../validation/userValidation'

export const LoginPage: React.FC = () => {
  const initialValues = {
    Username: '',
    Password: ''
  }

  return (
    <Form
      view="Log in"
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => console.log(values)}/>
  )
}
