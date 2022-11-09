import React, { useContext, useState } from 'react';
import { Form } from '../../components/Form';
import { signupShema } from '../../validation/userValidation';
import { createUser } from '../../server/server';
import { useNavigate } from 'react-router-dom';
import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup';
import { UserData } from '../../utils/types';
import { UserContext } from '../../utils/UserContext';

export const SignupPage: React.FC = () => {
  const [error, setError] = useState('');
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    username: '',
    fullname: ''
  };

  const handleSignUp = async (values: UserData): Promise<any> => {
    try {
      const response = await createUser(values);
      if (response?.message === 'Created') {
        localStorage.setItem('userId', JSON.stringify(values.username));
        setUserId(values.username);
        navigate(`/tweets`);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('404 Can\t create an account');
    }
  };

  return (
    <>
    <div className='form'>
      <Form
        view="Sign up"
        initialValues={initialValues}
        validationSchema={signupShema}
        onSubmit={handleSignUp}
        />
    </div>
    <ErrorPopup text={error} className={error ? 'error-show': ''}></ErrorPopup>
    </>
  );
};
