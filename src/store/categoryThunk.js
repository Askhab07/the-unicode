import axios from 'axios';
import { API_KEY } from '../api/api';
import { addCategoryAction } from './categoryReducer';

export const fetchCategory = () => {
  return (dispatch) => {
    axios
    .get(`${API_KEY}/categories`)
    .then((response) => response.data)
    .then((data) => dispatch(addCategoryAction(data)));
  }
};
