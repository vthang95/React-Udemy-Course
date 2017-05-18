import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { CREATE_POST, createPost } from '../actions/index';

class PostNew extends Component {
  renderField(field) {
    const { meta: { touched, error }, label, input } = field;
    const formClassName = `form-group ${ touched && error ? 'has-danger': '' }`;

    return (
      <div className={formClassName}>
        <label>{label}</label>
        <input type='text' className='form-control' {...input} />
        {touched ? error : ''}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/'>
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Title'
            name='title'
            component={this.renderField} />
          <Field
            label='Categories'
            name='categories'
            component={this.renderField} />
          <Field
            label='Content'
            name='content'
            component={this.renderField} />
          <button type='submit' className='btn btn-primary'>Submit</button>
          <Link to='/' style={{ marginLeft: '5px' }} className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title ) errors.title = 'Title is required!';
  if (!values.content) errors.content = 'Content is required!'

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);
