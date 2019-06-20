import axios from "axios";
import authedAxios from "../axios";

export const LOGIN = "LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const IS_FETCHING = "IS_FETCHING";
export const FAILED_FETCH = "FAILED_FETCH";
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIEND = "GET_FRIEND";
export const POST_FRIEND = "POST_FRIEND";
export const PUT_FRIEND = "PUT_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

const endpoint = "http://localhost:5000/api";

// Login Action Creator
export const login = (username, password) => dispatch => {
  const credentials = { username, password };
  axios
    .post(`${endpoint}/login`, credentials)
    .then(res => {
      dispatch({ type: LOGIN, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({
        type: FAILED_LOGIN,
        payload: JSON.parse(err.request.response).error
      });
    })
    .finally(() => {});
};

// Get Friends Action Creator
export const getFriends = () => dispatch => {
  authedAxios()
    .get(`${endpoint}/friends`)
    .then(res => {
      dispatch({ type: GET_FRIENDS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const postFriend = () => dispatch => {
  authedAxios()
    .post(`${endpoint}/friends`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
