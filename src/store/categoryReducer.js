const initialState = {
  pending: false,
  category: []
};

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return { ...state, pending: true}
    case ADD_CATEGORY:
      return { ...state, category: action.payload, pending: false };
    default:
      return state;
  }
};

