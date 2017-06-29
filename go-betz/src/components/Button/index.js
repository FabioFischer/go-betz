import React from 'react';
import './button.css';


const Button = ({text, onClick}) => (
  <span className='button' onClick={event => onClick(event)}>{text}</span>
);

export default Button;