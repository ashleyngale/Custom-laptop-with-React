import React, { Component } from 'react';
import './App.js';
import './App.css';
import CustomItems from './CustomItems.js'


class CartSummary extends Component{
    return(
        <div>
          {Object.keys(this.state.selected).map((features, idx) => {
            const featureHash = features + '-' + idx;
            const selectedOption = this.state.selected[features];
    
            const total = Object.keys(this.state.selected).reduce(
              (acc, curr) => acc + this.state.selected[curr].cost,
              0)
    
            const USCurrencyFormat = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            });
            return (<div>Test</div>)
          })}
        </div>
      )
        export default CartSummary;