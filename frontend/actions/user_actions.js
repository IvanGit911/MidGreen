import * as UserApiUtil from '../utils/user-api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser,
});
        
export const signup = (user) => (dispatch) =>
  UserApiUtil.signup(user)
  .then(
  (user) => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
);

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtil.fetchUser(userId)
    .then((user) => dispatch(receiveCurrentUser(user))
);

export const updateUser = (user) => (dispatch) =>
  UserApiUtil.updateUser(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
);


// !Now that we have somewhere to store errors, when todo creation fails, dispatch those errors. You will need to update your createTodo action like this.

// const createTodo = todo => dispatch => (
//   APIUtil.createTodo(todo)
//     .then(
//       todo => dispatch(receiveTodo(todo)),
//       err => dispatch(receiveErrors(err.responseJSON))
//     )
// );
// Verify that your error state is populated if you try to create a todo with invalid params. Then, inside your todo form component, display the errors. You will need to pass the errors through mapStateToProps of the top level component. Make sure to clear the errors when the todo is successfully created!
