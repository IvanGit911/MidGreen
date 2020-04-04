import * as SessionApiUtil from "../utils/session-api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_USER,
  currentUser: currentUser,
});

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

export const login = (user) => (dispatch) =>
  SessionApiUtil.signup(user).then((user) =>
    dispatch(receiveCurrentUser(user))
  );

export const logout = () => (dispatch) =>
  SessionApiUtil.logout(user).then(() => 
  dispatch(logoutCurrentUser()));
