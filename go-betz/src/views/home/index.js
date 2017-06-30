import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

import { ComponentWrapper } from './../../components';

class Home extends ComponentWrapper {
  constructor(props) {
    super(props);
  }

  render() {
    const isLogged = this.services ? this.services.currentUser : false;
    const isAdmin = isLogged ? this.services.currentUser.isAdmin : false;

    return (
      <div className='home page inner-page'>
        <div className='home--actions'>
          <div><span><Link to='matches'>Partidas</Link></span></div>
          {!isLogged && <div><span><Link to='sign-in'>Login</Link></span></div>}
          {!isLogged && <div><span><Link to='sign-up'>Novo cadastro</Link></span></div>}
          {isLogged && <div><span><Link to='my-bets'>Minhas apostas</Link></span></div>}
          {isLogged && <div><span><Link to='add-funds'>Adicionar crédito</Link></span></div>}
          {isAdmin && <div><span><Link to='new-team'>Novo time</Link></span></div>}
          {isAdmin && <div><span><Link to='new-match'>Nova partida</Link></span></div>}
          <div><span><Link to='about'>Sobre</Link></span></div>
        </div>
      </div>
    )
  }
}

export default Home;