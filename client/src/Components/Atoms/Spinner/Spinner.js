import PropTypes from 'prop-types';
import React from 'react';
import './Spinner.style.scss';

export default function Spinner({
  color,
  yellow,
  className,
  style,
  width,
  height,
  size,
  ...props
}) {
  return (
    <div
      className="loading-container"
      style={{ width: width || size, height: height || size }}
    >
      {color || yellow ? (
        <span
          className={`icon-loading loading loading--color ${
            className ? className : ''
          }`}
          style={{
            ...style,
            fontSize: size + (size > 100 ? 48 : 24)
          }}
          {...props}
        />
      ) : null}

      <span
        className={`icon-loading loading loading--gray ${
          className ? className : ''
        }`}
        style={{ ...style, fontSize: size }}
        {...props}
      />
    </div>
  );
}

Spinner.protoTypes = {
  color: PropTypes.bool,
  yellow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number
};

Spinner.defaultProps = {
  size: 52
};
