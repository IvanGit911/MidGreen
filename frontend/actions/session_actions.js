import * as SessionApiUtil from "../utils/session-api_util";
import { receiveCurrentUser } from "../actions/user_actions";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

//todo errors
const receiveErrors = (errors = []) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors,
});

//thunk actions

export const login = (user) => (dispatch) =>
  SessionApiUtil.login(user).then((user) => 
  dispatch(receiveCurrentUser(user)));



export const logout = () => (dispatch) =>
  SessionApiUtil.logout(user).then(() => 
  dispatch(logoutCurrentUser()));
