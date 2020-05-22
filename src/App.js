import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css'
import CartItems from './CartItems.js'
import CustomItems from './CustomItems.js'
import features from './index.js'
import FEATURES from './index.js'
import CartSummary from './CartSummary.js'
import featureHash from 'CartSummary.js'
 



class App extends Component {
    constructor(CustomItems) {
      super(props);
 this.state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
    }
  };
  render(){
    const CartItems = new CartItems();
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomItems/>
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <div 
            CartItems = {this.props.CartItems}/>
            <div 
            CartSummary= {this.props.CartSummary}/>
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      
    
  <fieldset className="feature" key={this.props.featureHash}>
    <legend className="feature__name">
      <h3>{features}</h3>
    </legend>
    {options}
  </fieldset>
  </div>
    );
   
  }
}
export default App;

