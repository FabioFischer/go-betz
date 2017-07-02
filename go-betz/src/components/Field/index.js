import React from 'react';

const Field = ({ name, value, placeholder, onChange, type, size }) => (
  <div className={`field ${size || 'medium'}`}>
    <label name={name}>{placeholder}</label>
    <input type={type || 'text'} name={name} value={value || ''} placeholder={placeholder} onChange={event => onChange(event)}></input>
  </div>
);

export default Field;