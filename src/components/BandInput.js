import React, { Component } from 'react';

class BandInput extends Component {

  state = {text: ''}

  handleChange = event => {
    this.setState({text: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({text: ''})
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Create a band! <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' value='Create Band' />
        </form>
      </div>
    );
  }
};

export default BandInput;
