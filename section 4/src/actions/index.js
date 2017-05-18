import axios from 'axios';

const API_KEY = '?key=vthang95';
const ROOT_API_URL = 'http://reduxblog.herokuapp.com/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
  let url = `${ROOT_API_URL}/posts${API_KEY}`;
  let request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(data, callback) {
  let url = `${ROOT_API_URL}/posts${API_KEY}`;
  let request = axios.post(url, data).then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchSinglePost(id) {
  let url = `${ROOT_API_URL}/posts/${id}${API_KEY}`;
  let request = axios.get(url);
  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  let url = `${ROOT_API_URL}/posts/${id}${API_KEY}`;
  let request = axios.delete(url).then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}
