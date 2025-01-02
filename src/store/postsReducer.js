const initialState = {
  posts: [],
  pending: false,
  error: null
};

export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POSTS = 'ADD_POSTS';
export const ADD_POSTS_CATEGORY = 'ADD_POSTS_CATEGORY';
export const ADD_POSTS_ID = 'ADD_POSTS_ID';

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, pending: true};
    case ADD_POSTS:
      case ADD_POSTS_CATEGORY:
        case ADD_POSTS_ID:
      return { ...state, posts: action.payload, pending: false};
    default:
      return state;
  }
};
