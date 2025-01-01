const initialState = {
  posts: [],
  pending: false,
  error: null
};

export const ADD_POSTS = 'ADD_POSTS';
export const ADD_POSTS_CATEGORY = 'ADD_POSTS_CATEGORY';
export const ADD_POSTS_ID = 'ADD_POSTS_ID';

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return { ...state, posts: action.payload};
    case ADD_POSTS_CATEGORY:
      return { ...state, posts: action.payload};
    case ADD_POSTS_ID:
      return { ...state, posts: action.payload};
    default:
      return state;
  }
};
