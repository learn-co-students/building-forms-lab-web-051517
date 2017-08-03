import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    band: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.band
    })
    this.setState({band: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.band} onChange={(e) => {this.setState({band: e.target.value})}}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
