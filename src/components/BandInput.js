import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.name,
    });
    this.setState({
      name: '',
    })
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
