import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return _.map(this.props.posts, post =>  {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/post/${post.id}`} >
            {post.title}
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/post/new'>
            Add a post
          </Link>
        </div>
        <h3>Post</h3>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
