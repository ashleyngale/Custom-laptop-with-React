import React, { Component } from 'react';
import './App.js';
import './App.css';
import CartItems from './CartItems'


class CartSummary extends Component{
    render(){
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0);


        return(
        <section className="main__summary">
            <h2>Your cart</h2>
            {Object.keys(this.props.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.props.selected[feature];
                    
               })}

            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total)}
                </div>
            </div>
        </section>     
        );
    }
}

export default CartSummary;

        //const USCurrencyFormat = new Intl.NumberFormat('en-US', {
                //style: 'currency',
                //currency: 'USD'
                //});
