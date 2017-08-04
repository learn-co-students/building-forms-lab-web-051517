import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()

    this.state={
        text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        text: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
          {this.state.text}

      </div>
    );
  }
};

export default BandInput;
