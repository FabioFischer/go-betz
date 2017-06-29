import React from 'react';
import './match.css';

const Match = ({ onClick, description, teamA, date, teamB, winner }) => (
  <div onClick={() => onClick ? onClick() : ''}  className={`match ${winner && winner.id ? 'finished' : ''} ${onClick ? 'clickable' : ''}`}>
    <div className='match--header'>
      <div className='match--title'>{description}</div>
      <div className='match--date'>{date}</div>
    </div>
    <div className='match--content'>
      <div className={`match--team ${winner && teamA ? winner.id === teamA.id ? 'winner' : 'looser' : ''}`}>{teamA ? teamA.name : ''}</div>
      <div className='match--versus'>x</div>
      <div className={`match--team ${winner && teamB ? winner.id === teamB.id ? 'winner' : 'looser' : ''}`}>{teamB ? teamB.name : ''}</div>
    </div>
  </div>
);

export default Match;
