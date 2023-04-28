import React from 'react';
import './SearchInput.style.scss';

export default function SearchInput({ error, success, onIconClick, ...props }) {
  return (
    <div className="search-input">
      <input
        className={`form-input ${error ? 'error' : success ? 'success' : ''}`}
        {...props}
      />
      <button type="submit" onClick={onIconClick} className="icon-search" />
    </div>
  );
}
