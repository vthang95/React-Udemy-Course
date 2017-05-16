import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onVideoSearch(this.state.value);
  }

  onInputChange(e, term) {
    this.setState({ value: term });
    this.props.onVideoSearch(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          type='text'
          value={this.state.value}
          onChange={e => this.onInputChange(e, e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
