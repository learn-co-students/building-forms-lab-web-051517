import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          return this.handleSubmit(event)
        }}>
          <label>Add Band</label>
          <input type="text" onChange={(event) => {
            return this.handleChange(event)
          }} />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
