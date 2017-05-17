import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const API_KEY = '?key=vthang95';
const ROOT_API_URL = 'http://reduxblog.herokuapp.com/api'

export function fetchPosts() {
  let url = `${ROOT_API_URL}/posts${API_KEY}`

  let request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
