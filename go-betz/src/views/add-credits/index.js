import React from 'react';

import { TextField } from 'material-ui';

import { AuthenticatedButton } from './../../components';

import { wallet, ls } from './../../services';

class AddCredits extends React.Component {
  state = {
    value: ''
  };

  handleOnChange = (e, newValue) => this.setState({ value: newValue });

  handleCCChange = (e, newValue) => this.setState({ creditCard: newValue });

  handleCancel = () => this.props.history.push('my-bets');

  getPaymentRequest() {
    const supportedInstruments = [{
      supportedMethods: ['basic-card'],
      data: {
        supportedNetworks: [
          'visa', 'mastercard', 'amex', 'discover',
          'diners', 'jcb', 'unionpay'
        ]
      }
    }];

    const details = {
      displayItems: [{
        label: 'Credits',
        amount: { currency: 'BRL', value: parseFloat(this.state.value) || 0 }
      }],
      total: {
        label: 'Total due',
        amount: { currency: 'BRL', value: this.state.value }
      }
    };

    return new window.PaymentRequest(supportedInstruments, details);
  }

  handleAdd() {
    const request = this.getPaymentRequest();

    request.show()
      .then(result => {
        const currentUser = ls.get('current_user');

        const requestBody = {
          userId: currentUser ? currentUser.id : 0,
          value: parseFloat(this.state.value),
          payment: result.toJSON()
        };

        console.log('request', requestBody);

        return wallet.addCredits(requestBody)
          .then(response => result.complete('success'))
          .catch(e => result.complete('fail'))
      });

  }

  render() {
    return (
      <div className='add-credits page upner--page'>
        <div className='add-credits--content'>
          <h2>ADD CREDITS</h2>
          <div className='add-credits--form'>
            <form>
              <TextField name='value' value={this.state.value} onChange={this.handleOnChange} floatingLabelText='Value' />
            </form>
          </div>
          <div className='add-credits--actions'>
            <AuthenticatedButton label='add' primary onTouchTap={this.handleAdd.bind(this)} />
            <AuthenticatedButton label='cancel' primary onTouchTap={this.handleCancel} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddCredits;


// <Stepper activeStep={stepIndex}>
//           <Step>
//             <StepLabel>Select campaign settings</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Create an ad group</StepLabel>
//           </Step>
//           <Step>
//             <StepLabel>Create an ad</StepLabel>
//           </Step>
//         </Stepper>