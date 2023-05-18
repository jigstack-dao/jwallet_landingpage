import React from 'react';
import './index.scss';

interface IButtonBrowser {
  icon?: React.ReactNode;
  text: string;
  to: string | undefined;
  disabled?: boolean;
}

const ButtonBrowser: React.FC<IButtonBrowser> = ({ icon, text, to, disabled }) => {
  return (
    <button className='btn-browser' disabled={disabled}>
      <a href={disabled ? '#' : to}>
        <span className='icon'>{icon}</span>
        <span className='text'>{text}</span>
      </a>
    </button>
  );
};

export default ButtonBrowser;
