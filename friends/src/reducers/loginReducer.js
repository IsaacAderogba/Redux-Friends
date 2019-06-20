import * as types from "../actions";

const initialState = {
    isLoggedIn: false,
    token: null
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case (types.LOGIN):
            localStorage.setItem('token', action.payload)
            return {...state, isLoggedIn: true, token: action.payload};
        default:
            return state;
    }
}