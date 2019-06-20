import axios from 'axios';

export const LOGIN = "LOGIN";
export const IS_FETCHING = "IS_FETCHING";
export const FAILED_FETCH = "FAILED_FETCH"
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIEND = "GET_FRIEND";
export const POST_FRIEND = "POST_FRIEND";
export const PUT_FRIEND = "PUT_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

const endpoint = 'http://localhost:5000/api';
// Login Action Creator
export const login = (username, password) => dispatch => {
    const credentials = { username, password }
    axios.post(`${endpoint}/login`, credentials)
      .then(res => {
          console.log(res);
        //   dispatch({ type: LOGIN, payload: })
      })
      .catch(err => {
          console.log(err)
      })
      .finally(() => {

      });
}