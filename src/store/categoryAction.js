import axios from 'axios';
import { API_KEY } from '../api/api';
import { ADD_CATEGORY, LOAD_CATEGORY } from './categoryReducer';

export const fetchCategory = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_CATEGORY });
    axios
      .get(`${API_KEY}/categories`)
      .then((response) => response.data)
      .then((data) => dispatch(addCategoryAction(data)));
  };
};

export const addCategoryAction = (payload) => ({ type: ADD_CATEGORY, payload });
