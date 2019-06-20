import * as types from "../actions";

const initialState = {
    isFetching: true,
    errorMessage: ''
};

export const fetchingReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.IS_FETCHING:
            return {...state, isFetching: action.payload};
        case types.FAILED_FETCH:
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}