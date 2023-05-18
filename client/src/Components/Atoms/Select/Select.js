import PropTypes from 'prop-types';
import React from 'react';
import CustomSelect from 'react-select';
import ReactAsyncSelect from 'react-select/async';
import './Select.style.scss';

export default function Select({
  options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' }
  ],
  error = false,
  success = false,
  ...props
}) {
  const validationClass = error
    ? 'custom-select--error'
    : success
    ? 'custom-select--success'
    : '';
  return (
    <CustomSelect
      options={options}
      className={`custom-select ${validationClass}`}
      classNamePrefix="custom-select"
      placeholder="Select"
      {...props}
    />
  );
}

export function AsyncSelect({
  options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' }
  ],
  error = false,
  success = false,
  ...props
}) {
  const validationClass = error
    ? 'custom-select--error'
    : success
    ? 'custom-select--success'
    : '';
  return (
    <ReactAsyncSelect
      options={options}
      className={`custom-select ${validationClass}`}
      classNamePrefix="custom-select"
      {...props}
    />
  );
}

Select.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  options: PropTypes.array,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool
};

AsyncSelect.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  options: PropTypes.array,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool
};
