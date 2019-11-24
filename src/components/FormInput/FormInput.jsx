import React from 'react';

import './FormInput.scss';

const renderLabel = (label, value) => {
  return (
    <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
      {label}
    </label>
  );
};

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label ? renderLabel(label, props.value) : null}
    </div>
  );
}
