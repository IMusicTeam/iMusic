import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import style from './VerificationInput.module.scss';
import './VerificationInput.style.scss';

function VerificationInput(props) {
  const input = useRef([]);
  const values = Array.isArray(props.value) ? props.value : [];

  const length = values?.length !== 0 ? values?.length : 6;

  const inputArray = [];
  const handleKeyDown = (e, index) => {
    e.persist();
    let newVal = [...values];
    let key = e.key;
    if (key === 'ArrowLeft' && index > 0) {
      input.current[index - 1].focus();
      input.current[index - 1].select();
      return;
    }
    if (key === 'ArrowRight' && index < length - 1) {
      input.current[index + 1].focus();
      input.current[index + 1].select();
      return;
    }
    if (e.keyCode === 32) return;
    if (!isNaN(key)) {
      newVal[index] = key;
      if (index + 1 < length) {
        input.current[index + 1].focus();
        input.current[index + 1].select();
      }
    } else if (['Delete', 'Backspace'].includes(key)) {
      newVal[index] = '';
      if (index > 0) {
        input.current[index - 1].focus();
        input.current[index - 1].select();
      }
    }
    props.onChange(newVal);
  };

  useEffect(() => {
    let filledInputs = 0;
    values.map((val) => {
      if (val !== '') {
        filledInputs++;
      }
      return null;
    });
    if (filledInputs === length && typeof props.onComplete === 'function') {
      props.onComplete();
    }
    // eslint-disable-next-line
  }, [values]);

  const onPaste = (e) => {
    const stringValue = e.clipboardData.getData('Text');
    const numbers = stringValue.replace(/[^0-9.]/g, '');
    if (numbers.length === length) {
      const split = numbers.split('');
      props.onChange(split);
    }
  };

  for (let i = 0; i < length; i++) {
    inputArray.push(
      <input
      {...props}
        key={`code-input-${i}`}
        readOnly={props.readOnly} //|| props.isLoading
        disabled={props.disabled}
        maxLength={1}
        ref={(ref) => (input.current[i] = ref)}
        onFocus={(e) => e.target.select()}
        onClick={(e) => e.target.select()}
        onChange={(e) => {}}
        onPaste={onPaste}
        autoComplete="off"
        onKeyDown={(e) => handleKeyDown(e, i)}
        value={values[i]}
        className={`verification-input ${
          props.error && !props.success && !props.isLoading ? 'error' : ''
        } ${
          props.success && !props.error && !props.isLoading ? 'success' : ''
        }`}
      />
    );
  }

  useEffect(() => {
    if (values[0] === '') {
      input.current[0].focus();
    }
  }, [values[0]]);

  useEffect(() => {
    if (values[5] !== '') {
      input.current[5].blur();
    }
  }, [values[5]]);

  return (
    <div className={`verification-input-wrapper ${props.className || ''}`}>
      <div
        className={`${style.verification_input_wrapper} ${
          props.className || ''
        } flex flex-col justify-center text-center p-0 m-0`}
      >
        <div
          className={`flex relative align-center ${style.verification_input}`}
        >
          {inputArray}
          {props.error && (
            <span
              className={`${style.verification_input_error_message} absolute left-0 right-0 -bottom-1 text-sm text-crd7 text-center --tw-translate-y`}
            >
              {props.error}
            </span>
          )}
        </div>
        <div className="flex items-center justify-center h-10 text-center">
          {props.isLoading ? (
            <span
              className={`mt-1 text-center font-medium  text-cgy5 ${style.code__is_checking}`}
            >
              Verifying...
            </span>
          ) : props.error ? (
            <span
              className={`mt-1 text-center font-bold text-crd5 ${style.code__verification_error}`}
            >
              Verification Failed
            </span>
          ) : (
            props.success && (
              <span
                className={`mt-1 text-center font-bold text-cgn5 ${style.code__verification_success}`}
              >
                Verification Successful
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

VerificationInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  success: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default VerificationInput;
