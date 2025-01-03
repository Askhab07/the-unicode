import axios from 'axios';
import { ADD_CATEGORY, LOAD_CATEGORY } from './categoryReducer';
import { getCategoryRoute } from '../api/constants';

export const fetchCategory = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_CATEGORY });
    axios
      .get(getCategoryRoute())
      .then((response) => response.data)
      .then((data) => dispatch(addCategoryAction(data)));
  };
};

export const addCategoryAction = (payload) => ({ type: ADD_CATEGORY, payload });
