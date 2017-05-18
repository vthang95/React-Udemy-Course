import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSinglePost, deletePost } from '../actions/index';

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
  }
  handleSubmit() {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { post } = this.props;
    if (!post) return <div>loading...</div>;

    return (
      <div>
        <div>
          <Link to='/' className='btn btn-primary'>Back to hompage</Link>
          <button
            type='submit'
            className='btn btn-danger'
            onClick={this.handleSubmit.bind(this)}>Delete post</button>
        </div>
        {post.title}
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostDetail);
