import React from 'react';
import { Form } from '../../components/Form';
import { createUser } from '../../server/server';
import { loginSchema } from '../../validation/userValidation';

export const LoginPage: React.FC = () => {
  const initialValues = {
    Username: '',
    Password: ''
  };

  const handleSubmit = async (values: Record<string, string>): Promise<any> => {
    await createUser(values);
  };

  return (
    <Form
      view="Log in"
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}/>
  );
};
