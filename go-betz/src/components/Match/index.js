import React from 'react';
import './match.css';

const Match = ({ title, teamA, teamB, format, date, victory }) => (
  <div className={`match ${victory ? 'finished' : ''}`}>
    <div className='match--header'>
      <div className='match--title'>{title}</div>
      <div className='match--date'>{date}</div>
    </div>
    <div className='match--content'>
      <div className={`match--team ${victory === teamA ? 'victorious' : 'looser'}`}>{teamA}</div>
      <div className='match--versus'>x</div>
      <div className={`match--team ${victory === teamB ? 'victorious' : 'looser'}`}>{teamB}</div>
    </div>
  </div>
);

export default Match;
