import React from 'react';
import './Button.scss';

export const Button: React.FC<{ className?: string, label: string, onClick?: () => void }> = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick} >{ label }</button>
  );
};
