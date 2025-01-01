const initialState = {
  posts: [],
};

const ADD_POSTS = 'ADD_POSTS';

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return { ...state, posts: action.payload};
    default:
      return state;
  }
};

export const addPostsAction = (payload) => ({ type: ADD_POSTS, payload });
