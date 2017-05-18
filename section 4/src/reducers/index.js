import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostReducer from './posts.reducer'

const rootReducer = combineReducers({
  posts: PostReducer,
  form: FormReducer
});

export default rootReducer;
