import React from 'react';
import './bet.css';

const Bet = ({ onClick, title, value, pick, date, status }) => (
  <div onClick={() => onClick ? onClick() : ''}  className={`bet ${status} ${onClick ? 'clickable' : ''}`}>
    <div className='bet--header'>
      <div className='bet--title'>{title}</div>
      <div className='bet--date'>{date}</div>
    </div>
    <div className='bet--content'>
    <div className='bet--pick'>${value}</div>
    <div className='bet--pick'>Time: {pick}</div>
    </div>
  </div>
);

export default Bet;
