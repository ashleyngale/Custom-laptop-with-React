import './App.css';
import React, { Component } from 'react';
import './App.js';
import features from './index.js'


class CartSummary extends Component{
    render(){
        return(
             summary = Object.keys(this.state.selected).map((features, idx) => {
                const featureHash = features + '-' + idx;
                const selectedOption = this.state.selected[features];
             
                const total = Object.keys(this.state.selected).reduce(
                    (acc, curr) => acc + this.state.selected[curr].cost,
                    0)

                const USCurrencyFormat = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
            }   
        ))}
}
        export default CartSummary;