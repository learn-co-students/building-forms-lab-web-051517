import React, { Component } from 'react'

class Bands extends Component {
  render(){
  // debugger
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map((band, i) => {
            return <li key={i}>{band}</li>}
          )}
        </ul>
      </div>
    )
  }
}

export default Bands
