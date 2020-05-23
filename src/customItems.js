import './App.css';
import React, { Component } from 'react';
import slugify from 'slugify';
import './App.js';

Object.keys(this.props.features)

class CustomItems extends Component {
 
  render() {
    return (
       features = Object.keys(this.props.features).map((features, idx) => {
        const featureHash = features + '-' + idx;
        const options = this.props.features[features].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(features)}
                checked={item.name === this.state.selected[features].name}
                onChange={e => this.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{features}</h3>
            </legend>
            {options}
          </fieldset>
      })
      )
    }
    }

export default CustomItems;