import React from 'react';
import s from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className={s.errorContainer}>
      <h2 className={s.error}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything.
      </h2>
    </div>
  );
};

export default ErrorMessage;
