import * as types from "../actions";

const initialState = {
  friends: [],
  friend: null,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FRIENDS:
      return { ...state, friends: action.payload };
    case types.GET_FRIEND:
      return { ...state, friend: action.payload };
    case types.POST_FRIEND:
      return { ...state, friends: action.payload };
    case types.PUT_FRIEND:
      return { ...state, friends: action.payload };
    case types.DELETE_FRIEND:
      return { ...state, friends: action.payload };
    default:
      return state;
  }
};
