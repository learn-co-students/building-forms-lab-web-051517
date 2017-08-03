import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let dispatchObject = {
      type: 'ADD_BAND',
      band: this.state.text
    }
    this.props.store.dispatch(dispatchObject)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
