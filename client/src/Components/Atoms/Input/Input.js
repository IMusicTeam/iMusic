import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      className={`${styles.form_input} ${className}`}
      autoComplete="off"
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';
Input.propTypes = {
  error: PropTypes.bool,
  className: PropTypes.string
};
