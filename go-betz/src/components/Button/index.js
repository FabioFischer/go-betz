import React from 'react';


const Button = ({text, onClick}) => (
  <span className='button' onClick={event => onClick(event)}>{text}</span>
);

export default Button;