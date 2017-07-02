import React from 'react';

const Bet = ({ onClick, value, date, team }) => (
  <div onClick={() => onClick ? onClick() : ''} className={`bet ${onClick ? 'clickable' : ''}`}>
    <div className='bet--header'>
      <div className='bet--date'>{date}</div>
    </div>
    <div className='bet--content'>
      <div className='bet--pick'>
        <span>{team.name}, ${value}</span>
      </div>
    </div>
  </div>
);

export default Bet;
