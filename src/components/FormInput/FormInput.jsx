import React from 'react';

import './FormInput.scss';

const renderLabel = (name, value) => {
  return (
    <label
      htmlFor={name}
      className={`${value.length ? 'shrink' : ''} form-input-label`}
    >
      {name}
    </label>
  );
};

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="group">
      <input
        className="form-input"
        // htmlFor={props.name}
        onChange={handleChange}
        {...props}
      />
      {label ? renderLabel(props.name, props.value) : null}
    </div>
  );
}
