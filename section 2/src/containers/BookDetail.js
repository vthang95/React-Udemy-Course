import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to start!</div>
    }
    return (
      <div>
        <h3>Book details:</h3>
        <li>{this.props.book.title}</li>
        <li>{this.props.book.pages}</li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
