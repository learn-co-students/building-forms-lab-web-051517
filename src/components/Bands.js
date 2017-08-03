import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map( (band, index) => {
      return <Band key={index} band={band} />
    })
    return (
      <ul>
        {bands}
      </ul>
    );
  }
};

function Band(props) {
  return <li>{props.band}</li>
}

export default Bands;
