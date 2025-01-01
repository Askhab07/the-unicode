import axios from 'axios'
import { ADD_POSTS, ADD_POSTS_CATEGORY, ADD_POSTS_ID } from './postsReducer'
import {API_KEY} from '../api/api';

export const fetchPosts = () => {
    return (dispatch) => {
        axios
        .get(`${API_KEY}/posts`)
        .then(response => response.data)
        .then(data => dispatch(addPostsAction(data)))
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