import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.refs.term.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='input-group'>
        <input
          value={this.state.term}
          className='form-control'
          ref='term'
          onChange={this.handleChange}
          type='text' />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary '>Search</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
