import './App.css';
import React, { Component } from 'react';
import './CustomItems.js'
import './App.js';
import CustomItems from './CustomItems.js'
import FEATURES from './index.js'
import CartSummary from '..CartSummary.js'


class CartItems extends Component {
  render() {
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default CartItems; 
  