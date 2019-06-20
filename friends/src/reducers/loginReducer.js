import * as types from "../actions";

const initialState = {
    isLoggedIn: false,
    loginError: '',
    token: null
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN:
            localStorage.setItem('token', action.payload)
            return {...state, isLoggedIn: true, token: action.payload};
        case types.FAILED_LOGIN:
            return {...state, loginError: action.payload};
        default:
            return state;
    }
}