import { combineReducers } from 'redux';

import BooksReducer from './books.reducer';
import ActiveBook from './activeBook.reducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
