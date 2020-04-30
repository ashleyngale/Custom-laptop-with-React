import './App.css';
import React, { Component } from 'react';
import './CustomItems.js'
import './App.js';


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
//add new cart items
updateFeature = (feature, newValue) => {
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
};

class CartSummary extends Component{
  render(){
    return(
const summary = Object.keys(this.state.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = this.state.selected[feature];


const total = Object.keys(this.state.selected).reduce(
  (acc, curr) => acc + this.state.selected[curr].cost,
  0
);

//calculate cart items
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'

};
  };
}
export default CartItems;
