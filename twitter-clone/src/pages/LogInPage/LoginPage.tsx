import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup';
import { Form } from '../../components/Form';
import { getUserbyId } from '../../server/server';
import { UserData } from '../../utils/types';
import { UserContext } from '../../utils/UserContext';
import { loginSchema } from '../../validation/userValidation';


export const LoginPage: React.FC = () => {
  const [error, setError ] = useState<string>('');
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: ''
  };

  const handleSubmit = async (values: UserData): Promise<any> => {
    console.log(values);
    try {
      const response = await getUserbyId(values.username);
      console.log(response);
      if(response.password === values.password) {
        localStorage.setItem('userId', JSON.stringify(values.username));
        setUserId(values.username);
        navigate(`/tweets`);    
      } else {
        setError('Password is not valid');
      }
      } catch (err) {
      if(err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <>
    <Form
      view="Log in"
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      />
    <ErrorPopup text={error} className={error ? 'error-show': ''}></ErrorPopup>
      </>
  );
};
