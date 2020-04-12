import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/user_actions";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_action";
import { clearErrors } from "../../actions/error_actions";

const msp = (state) => ({
  demoUser: {
    username: "IvanGoGreen",
    password: "thisisareallygoodpassword",
  },
  errors: state.errors.session,
  formType: "Go Green.",
});

const mdp = (dispatch) => ({
  demoLogin: (user) => dispatch(login(user)),
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button
      onClick={() => {
        dispatch(openModal("login"));
        dispatch(clearErrors());
      }}
    >
      Sign in
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);
