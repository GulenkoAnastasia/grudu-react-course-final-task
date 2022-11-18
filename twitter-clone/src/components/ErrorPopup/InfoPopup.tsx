import React from 'react';
import './InfoPopup.scss';

export const InfoPopup: React.FC<{text: string, className: string}> = ({ text, className }) => {
  return (
    <div className={`info ${className}`}>{text}</div>
  );
};