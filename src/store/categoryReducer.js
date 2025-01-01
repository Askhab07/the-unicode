const initialState = {
  category: [],
};

export const ADD_CATEGORY = 'ADD_CATEGORY';

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

