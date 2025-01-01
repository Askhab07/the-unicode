import axios from 'axios'
import { addPostsAction } from './postsReducer'
import {API_KEY} from '../api/api';

export const fetchPosts = () => {
    return (dispatch) => {
        axios
        .get(`${API_KEY}/posts`)
        .then(response => response.data)
        .then(data => dispatch(addPostsAction(data)))
    }
}