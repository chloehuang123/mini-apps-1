// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.

import React from 'react';

let forms = {
  form1: ['name', 'email', 'password'],
  form2: [
    'address line 1',
    'address line 2',
    'city',
    'state',
    'zip code',
    'phone number',
  ],
  form3: ['credit card number', 'expiration date', 'cvv', 'billing zip code'],
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formNow: '',
    };
  }

  render() {
    let view;

    if (this.state.formNow === '') {
      view = (
        <div>
          <h3>Main page</h3>
        </div>
      );
    } else if (this.state.formNow === 'form1') {
      view = (
        <div>
          <h3>Enter your account please</h3>
        </div>
      );
    } else if (this.state.formNow === 'form2') {
      view = (
        <div>
          <h3>Enter your shipping address please</h3>
        </div>
      );
    } else if (this.state.formNow === 'form3') {
      view = (
        <div>
          <h3>Enter your credit card info please</h3>
        </div>
      );
    }

    return <div>{view}</div>;
  }
}

export default App;
