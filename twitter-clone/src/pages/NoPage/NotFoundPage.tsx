import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import './NotFoundPage.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
    <Button label='Back to home' className='no-page__button' onClick={handleClick}></Button>
    <div className='no-page'>
      <span>404</span>
      <div>Page not found</div>
    </div>
    </>
  );
};