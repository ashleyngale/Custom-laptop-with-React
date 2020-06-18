import React, { Component } from 'react'
import './App.css'
import FeatureList from './Features/FeatureList'
import CartSummary from './Cart/CartSummary'
import FEATURES from './features.json'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
  });

 export default class App extends Component {
  state = {
    FEATURES: FEATURES,
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
    
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render(){
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureList
              features={this.props.features}
              selected={this.state.selected}
              USCurrencyFormat={USCurrencyFormat}
              updateFeature={this.updateFeature}
              
            />

              <CartSummary
                USCurrencyFormat={USCurrencyFormat}
                selected={this.state.selected}
              />
				</main>
			</div>
		);
	}
}