import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_action";

const msp = (state) => {
  // debugger
  return {
    errors: state.errors.session,
    formType: "Welcome back.",
    navLink: <Link to="/signup">Create one</Link>,
  };
};

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(SessionForm);
