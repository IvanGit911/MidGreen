import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_action";
import { clearErrors } from "../../actions/error_actions";

const msp = (state) => ({
  demoUser: {
    username: "IvanGoGreen",
    password: "thisisareallygoodpassword",
  },
  errors: state.errors.session,
  formType: "Welcome back.",
});

const mdp = (dispatch) => ({
  demoLogin: (user) => dispatch(login(user)),
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button
      onClick={() => {
        dispatch(openModal("signup"));
        dispatch(clearErrors());
      }}
    >
      Create one
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);
