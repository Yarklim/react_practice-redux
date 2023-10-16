import React from 'react';
import clsx from 'clsx';
import '../index.css';
import s from './UiButton.module.scss';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      className={clsx(s.button, s[theme], classes)}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UiButton;
