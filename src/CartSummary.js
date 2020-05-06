import './App.css';
import React, { Component } from 'react';
import './App.js';


class CartSummary extends Component{
    render(){
        return(
            const summary = Object.keys(this.state.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.state.selected[feature];
            
                const total = Object.keys(this.state.selected).reduce(
                    (acc, curr) => acc + this.state.selected[curr].cost,
                    0
            
                    //calculate cart items
                    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    

                        //add new cart items
                        updateFeature = (feature, newValue) => {
                            const selected = Object.assign({}, this.state.selected);
                            selected[feature] = newValue;
                            this.setState({
                            selected
                         })}
                    )}                

                )                    
           
             )}
            
        ); 
         
    }
}
        export default CartSummary;