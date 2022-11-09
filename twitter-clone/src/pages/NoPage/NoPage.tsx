import React from 'react';
import './NoPage.scss';

export const NoPage: React.FC = () => {

  return (
    <div className='no-page'>
      <span>404</span>
      <div>Page not found</div>
    </div>
  );
};