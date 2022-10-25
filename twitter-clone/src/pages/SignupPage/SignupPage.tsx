import React from 'react';
import { Form } from '../../components/Form';
import { signupShema } from '../../validation/userValidation';
import { createUser } from '../../server/server';
import { useNavigate } from 'react-router-dom';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    Email: '',
    Password: '',
    Username: '',
    Fullname: ''
  };

  const handleSignUp = async (values: Record<string, string>): Promise<any> => {
    try {
      const response = await createUser(values);
      console.log(response);
      if (response === 'Created') {
        navigate('/tweets');
      }
    } catch (err) {
      navigate('/*');
    }
  };

  return (
    <div className='form'>
      <Form
        view="Sign up"
        initialValues={initialValues}
        validationSchema={signupShema}
        onSubmit={handleSignUp}/>
    </div>
  );
};
