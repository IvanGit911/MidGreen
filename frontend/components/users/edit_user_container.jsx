import { fetchUser, updateUser, deleteUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import EditUserForm from "./edit_user_form";

const msp = (state, ownProps) => {
  // debugger;
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    user: state.entities.users[state.session.id],
  };
};

const mdp = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  deleteUser: (userId) => dispatch(deleteUser(userId)),
});

export default connect(msp, mdp)(EditUserForm);
