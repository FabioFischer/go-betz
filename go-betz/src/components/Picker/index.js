import React from 'react';
import './picker.css';

const Picker = ({ values, value, onChange, size, name, placeholder }) => (
  <div className={`picker ${size || 'medium'}`}>
    <label name={name}>{placeholder}</label>
    <select name={name} onChange={event => onChange(event)}>
      {
        (values || []).map(option => (
          <option value={option.id} selected={value === option.id}>{option.name}</option>
        ))
      }
    </select>
  </div>
);

export default Picker;