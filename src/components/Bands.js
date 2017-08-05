import React, { Component } from 'react';

class Bands extends Component {
  render(){
    let i = 0
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map(band => {
            return <li key={i += 1}>{band}</li>
          })}
        </ul>
      </div>
    );
  }
};

export default Bands;
