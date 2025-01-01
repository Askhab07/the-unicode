import { applyMiddleware, createStore, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { postsReducer } from './postsReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    posts: postsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
