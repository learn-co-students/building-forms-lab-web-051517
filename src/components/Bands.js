import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return(
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
          return <li key={index}> {band} </li>
            }) }
      </ul>
    )
  }
}

export default Bands;
