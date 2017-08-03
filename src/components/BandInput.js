import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }



  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({ input: '' })
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
        {this.state.input}
      </div>
    );
  }
};

export default BandInput;
