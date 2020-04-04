const ErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case value:
        //return action.errors or []
    //     break;

    default:
      return state;
  }
};


// Now that we have somewhere to store errors, when todo creation fails, dispatch those errors. You will need to update your createTodo action like this.

// const createTodo = todo => dispatch => (
//   APIUtil.createTodo(todo)
//     .then(
//       todo => dispatch(receiveTodo(todo)),
//       err => dispatch(receiveErrors(err.responseJSON))
//     )
// );
// Verify that your error state is populated if you try to create a todo with invalid params. Then, inside your todo form component, display the errors. You will need to pass the errors through mapStateToProps of the top level component. Make sure to clear the errors when the todo is successfully created!
