import React from 'react';

export default function MultiColorIcon({ icon = '', className = '', ...rest }) {
  return (
    <span className={`icon-${icon} ${className}`} {...rest}>
      <span className="path1" />
      <span className="path2" />
      <span className="path3" />
      <span className="path4" />
      <span className="path5" />
      <span className="path6" />
      <span className="path7" />
      <span className="path8" />
      <span className="path9" />
      <span className="path10" />
    </span>
  );
}
