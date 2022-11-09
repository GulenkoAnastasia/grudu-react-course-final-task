import React from 'react';
import './ErrorPopup.scss';

export const ErrorPopup: React.FC<{text: string, className: string}> = ({ text, className }) => {
  return (
    <div className={`error ${className}`}>{text}</div>
  );
};