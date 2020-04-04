import * as UserApiUtil from '../utils/user-api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser,
});
        
export const signup = (user) => (dispatch) =>
  UserApiUtil.signup(user)
  .then((user) => dispatch(receiveCurrentUser(user))
);

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtil.fetchUser(userId)
    .then((user) => dispatch(receiveCurrentUser(user))
);

export const updateUser = (user) => (dispatch) =>
  UserApiUtil.updateUser(user)
    .then((user) => dispatch(receiveCurrentUser(user))
);