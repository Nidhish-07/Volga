import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    let link = `/api/v7/login`;

    const { data } = await axios.post(link, { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
export const signUp = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    let link = `/api/v7/register`;

    const { data } = await axios.post(link, userData, config);

    dispatch({ type: SIGNUP_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: SIGNUP_USER_FAIL, payload: error.response.data.message });
  }
};

//* Clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
