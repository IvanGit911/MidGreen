import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_action";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(NavBar);
