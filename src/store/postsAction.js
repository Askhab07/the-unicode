import axios from 'axios'
import { ADD_POSTS, ADD_POSTS_CATEGORY, ADD_POSTS_ID, LOAD_POSTS } from './postsReducer'
import {API_KEY} from '../api/api';

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_POSTS });
        axios
        .get(`${API_KEY}/posts`)
        .then(response => response.data)
        .then(data => dispatch(addPostsAction(data)))
        .catch(error => dispatch({ type: 'FETCH_ERROR', error }));
    }
}

export const fetchPostsCategory = (id) => {
    return (dispatch) => {
        axios
        .get(`${API_KEY}/posts/category/${id}`)
        .then(response => response.data)
        .then(data => dispatch(addPostsCategoryAction(data)))
    }
}

export const fetchPostsId = (id) => {
    return (dispatch) => {
        axios
        .get(`${API_KEY}/posts/${id}`)
        .then(response => response.data)
        .then(data => dispatch(addPostsIdAction(data)))
    }
}

export const addPostsAction = (payload) => ({ type: ADD_POSTS, payload });
export const addPostsCategoryAction = (payload) => ({ type: ADD_POSTS_CATEGORY, payload });
export const addPostsIdAction = (payload) => ({ type: ADD_POSTS_ID, payload });