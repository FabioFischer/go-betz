import React from 'react';
import { AppBar, Drawer } from 'material-ui';

import { ComponentWrapper } from './../../components';

class Home extends ComponentWrapper {
  state = {
    expanded: false
  };

  onMenuClick = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  render() {
    const isLogged = this.services ? this.services.currentUser : false;
    const isAdmin = isLogged ? this.services.currentUser.isAdmin : false;

    const childrenComponent = (
      <Drawer open={this.state.expanded} docked={false} onRequestChange={(open) => this.setState({ expanded: open })}>
      </Drawer>
    );

    return (
      <AppBar
        children={childrenComponent}
        title="go-betz"
        onLeftIconButtonTouchTap={this.onMenuClick}
      />
    );

    // return (
    //   <div className='home page inner-page'>
    //     <div className='home--actions'>
    //       <div><span><Link to='matches'>Partidas</Link></span></div>
    //       {!isLogged && <div><span><Link to='sign-in'>Login</Link></span></div>}
    //       {!isLogged && <div><span><Link to='sign-up'>Novo cadastro</Link></span></div>}
    //       {isLogged && <div><span><Link to='my-bets'>Minhas apostas</Link></span></div>}
    //       {isLogged && <div><span><Link to='add-funds'>Adicionar crédito</Link></span></div>}
    //       {isAdmin && <div><span><Link to='new-team'>Novo time</Link></span></div>}
    //       {isAdmin && <div><span><Link to='new-match'>Nova partida</Link></span></div>}
    //       <div><span><Link to='about'>Sobre</Link></span></div>
    //     </div>
    //   </div>
    // )
  }
}

export default Home;