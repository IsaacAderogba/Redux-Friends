import * as types from "../actions";

const initialState = {
  friends: [],
  friend: null
};

// export const GET_FRIENDS = "GET_FRIENDS";
// export const GET_FRIEND = "GET_FRIEND";
// export const POST_FRIEND = "POST_FRIEND";
// export const PUT_FRIEND = "PUT_FRIEND";
// export const DELETE_FRIEND = "DELETE_FRIEND";

export const loginReducer = (state = initialState, action) => {
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
